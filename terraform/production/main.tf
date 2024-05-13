terraform {
  backend "s3" {
    bucket  = "terraform-state-production-apis"
    encrypt = true
    region  = "eu-west-2"
    key     = "services/hackney-playbook/state"
  }
}

provider "aws" {
  region = "us-east-1"
  version = "~> 2.0"
}

data "aws_caller_identity" "current" {}

locals {
  environment_name = "production"
  origins = {
    "api-playbook-frontend-${local.environment_name}" = "API-Playbook"
  }
}

module "playbook_distribution" {
  source              = "github.com/LBHackney-IT/aws-hackney-common-terraform.git//modules/playbook-hosting/with-waf?ref=playbook-distro"
  cname_aliases       = ["playbook.hackney.gov.uk"]
  environment_name    = local.environment_name
  cost_code           = "B0811"
  project_name        = "hackney-playbooks"
  use_cloudfront_cert = false
  origins             = local.origins
  hackney_cert_arn    = "arn:aws:acm:us-east-1:${data.aws_caller_identity.current.account_id}:certificate/4877809f-989f-4e31-9a1a-4c054f00b51e"
  web_acl_id = "arn:aws:wafv2:us-east-1:${data.aws_caller_identity.current.account_id}:global/webacl/FE_Web_ACL/679f5ebc-fb36-48ae-88c3-be4b55598720"
}