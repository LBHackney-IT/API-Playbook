provider "aws" {
  region  = "eu-west-2"
  version = "~> 2.0"
}

terraform {
  backend "s3" {
    bucket  = "terraform-state-development-apis"
    encrypt = true
    region  = "eu-west-2"
    key     = "common/state"
  }
}

module "playbook_distribution" {
  source = "github.com/LBHackney-IT/aws-hackney-common-terraform.git//modules/playbook-hosting?ref=playbook-distro"
  cname_aliases = []
  environment_name = "staging"
  cost_code = "B0811"
  project_name = "hackney-playbooks"
  use_cloudfront_cert = true
}