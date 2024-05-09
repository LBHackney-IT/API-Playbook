terraform {
  backend "s3" {
    bucket  = "terraform-state-staging-apis"
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
  environment_name = "staging"
  origins = {
    "api-playbook-frontend-${local.environment_name}" = "API-Playbook"
  }
}

module "playbook_distribution" {
  source              = "github.com/LBHackney-IT/aws-hackney-common-terraform.git//modules/playbook-hosting/without-waf?ref=playbook-distro"
  cname_aliases       = [] // "playbook-staging.hackney.gov.uk"
  environment_name    = local.environment_name
  cost_code           = "B0811"
  project_name        = "hackney-playbooks"
  use_cloudfront_cert = true
  origins             = local.origins
  hackney_cert_arn    = "arn:aws:acm:us-east-1:${data.aws_caller_identity.current.account_id}:certificate/" // Update once certificate is made
}