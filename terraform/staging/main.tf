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

module "playbook_distribution" {
  source              = "github.com/LBHackney-IT/aws-hackney-common-terraform.git//modules/playbook-hosting/without-waf?ref=playbook-distro"
  cname_aliases       = []
  environment_name    = "staging"
  cost_code           = "B0811"
  project_name        = "hackney-playbooks"
  use_cloudfront_cert = true
}