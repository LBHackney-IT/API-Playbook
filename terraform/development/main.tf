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
  environment_name = "development"
  origins = {
    "tech-radar-frontend-${local.environment_name}"   = "tech-radar"
    "api-playbook-frontend-${local.environment_name}" = "API-Playbook"
  }
}
