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

module "playbook_distribution" {
  source              = "github.com/LBHackney-IT/aws-hackney-common-terraform.git//modules/playbook-hosting/without-waf?ref=playbook-distro"
  cname_aliases       = ["playbook-development.hackney.gov.uk"]
  environment_name    = "development"
  cost_code           = "B0811"
  project_name        = "hackney-playbooks"
  use_cloudfront_cert = false
  hackney_cert_arn    = "arn:aws:acm:eu-west-2:${data.aws_caller_identity.current.account_id}:certificate/20e17f4b-2a75-462c-ba1c-2b9429f19b93"
}