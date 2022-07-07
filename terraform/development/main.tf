terraform {
  backend "s3" {
    bucket  = "terraform-state-development-apis"
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
  origins = {
    "tech-radar-frontend-${var.environment_name}"   = "tech-radar"
    "api-playbook-frontend-${var.environment_name}" = "API-Playbook"
  }
}

module "playbook_distribution" {
  source              = "github.com/LBHackney-IT/aws-hackney-common-terraform.git//modules/playbook-hosting/without-waf?ref=update-playbook"
  cname_aliases       = ["playbook-development.hackney.gov.uk"]
  environment_name    = "development"
  cost_code           = "B0811"
  project_name        = "hackney-playbooks"
  use_cloudfront_cert = false
  origins             = local.origins
  hackney_cert_arn    = "arn:aws:acm:us-east-1:${data.aws_caller_identity.current.account_id}:certificate/de3298d7-7f2a-45b7-8cd3-4769839cdbcc"
}