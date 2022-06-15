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

module "playbook_distribution" {
  source              = "github.com/LBHackney-IT/aws-hackney-common-terraform.git//modules/playbook-hostin/with-waf?ref=playbook-distro"
  cname_aliases       = []
  environment_name    = "production"
  cost_code           = "B0811"
  project_name        = "hackney-playbooks"
  use_cloudfront_cert = true
  web_acl_id = "arn:aws:wafv2:us-east-1:${data.aws_caller_identity.current.account_id}:global/webacl/FE_Web_ACL/679f5ebc-fb36-48ae-88c3-be4b55598720"
}