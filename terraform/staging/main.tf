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
  cname_aliases       = ["playbook-staging.hackney.gov.uk"]
  environment_name    = "staging"
  cost_code           = "B0811"
  project_name        = "hackney-playbooks"
  use_cloudfront_cert = false
  hackney_cert_arn    = "arn:aws:acm:us-east-1:${data.aws_caller_identity.current.account_id}:certificate/8f7fa30c-a4e5-4775-b827-ade824a33c9a"
}