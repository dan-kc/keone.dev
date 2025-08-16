terraform {
  required_version = ">= 1.8.2"

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 4.16"
    }
  }

  backend "local" {}
}

provider "aws" {
  region = "eu-west-2"
}

resource "aws_s3_bucket" "keone_dev_bucket" {
  bucket = "keone-dev-1zaab0wzecqr4cub"
}

resource "aws_s3_bucket_public_access_block" "keone_dev_public_access_block" {
  bucket = aws_s3_bucket.keone_dev_bucket.id

  block_public_acls       = true
  block_public_policy     = false
  ignore_public_acls      = true
  restrict_public_buckets = false
}


resource "aws_s3_bucket_policy" "keone_dev_policy" {
  bucket = aws_s3_bucket.keone_dev_bucket.id

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Sid       = "PublicReadGetObject"
        Effect    = "Allow"
        Principal = "*"
        Action    = ["s3:GetObject"]
        Resource = [
          "${aws_s3_bucket.keone_dev_bucket.arn}/*",
        ]
      },
    ]
  })
}

resource "aws_s3_bucket_website_configuration" "keone_dev_website" {
  bucket = aws_s3_bucket.keone_dev_bucket.id
  index_document {
    suffix = "index.html"
  }
  error_document {
    key = "error.html"
  }
}


resource "aws_cloudfront_distribution" "keone_dev_cloudfront_distribution" {
  origin {
    domain_name = aws_s3_bucket_website_configuration.keone_dev_website.website_endpoint
    origin_id   = "S3-Website-Origin"
    custom_origin_config {
      http_port              = 80
      https_port             = 443
      origin_protocol_policy = "http-only" # CloudFront will talk to S3 via HTTP
      origin_ssl_protocols   = ["TLSv1.2"]
    }
  }

  enabled             = true
  is_ipv6_enabled     = true
  comment             = "CloudFront distribution for static site"
  default_root_object = "index.html"

  default_cache_behavior {
    allowed_methods  = ["GET", "HEAD"]
    cached_methods   = ["GET", "HEAD"]
    target_origin_id = "S3-Website-Origin"

    forwarded_values {
      query_string = false

      cookies {
        forward = "none"
      }
    }

    viewer_protocol_policy = "redirect-to-https"
    min_ttl                = 0
    default_ttl            = 3600
    max_ttl                = 86400
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  viewer_certificate {
    cloudfront_default_certificate = true
  }
}

# Github actions
resource "aws_iam_policy" "keone_dev_cloudfront_s3_invalidation_policy" {
  name        = "keone-dev-cloudfront-s3-invalidation-policy"
  description = "Allows Put, List, Delete S3 objects in keone_dev bucket and CloudFront invalidation"

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Sid    = "VisualEditor0"
        Effect = "Allow"
        Action = [
          "s3:PutObject",
          "s3:ListBucket",
          "s3:DeleteObject",
          "cloudfront:CreateInvalidation"
        ]
        Resource = [
          aws_cloudfront_distribution.keone_dev_cloudfront_distribution.arn,
          "${aws_s3_bucket.keone_dev_bucket.arn}/*",
          aws_s3_bucket.keone_dev_bucket.arn
        ]
      }
    ]
  })
}

# Define the AWS IAM OIDC Provider for GitHub Actions
resource "aws_iam_openid_connect_provider" "github_actions" {
  url = "https://token.actions.githubusercontent.com" # The identity provider URL
  # List of audience claims, sts.amazonaws.com is required for AWS STS AssumeRole
  client_id_list = [
    "sts.amazonaws.com",
  ]

  # openssl s_client -servername token.actions.githubusercontent.com -connect token.actions.githubusercontent.com:443 < /dev/null 2>/dev/null openssl x509 -fingerprint -noout cut -d '=' -f 2 tr -d ':' tr '[:upper:]' '[:lower:]'
  thumbprint_list = [
    "7560d6f40fa55195f740ee2b1b7c0b4836cbe103",
  ]
}

resource "aws_iam_role" "keone_dev_site_deployer_role" {
  name = "keone-dev-site-deployer-role"
  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Effect = "Allow"
        Principal = {
          Federated = aws_iam_openid_connect_provider.github_actions.arn
        }
        Action = "sts:AssumeRoleWithWebIdentity"
        Condition = {
          StringEquals = {
            # This verifies the audience of the JWT token is AWS STS
            "token.actions.githubusercontent.com:aud" : "sts.amazonaws.com",
            "token.actions.githubusercontent.com:sub" : "repo:dan-kc/keone.dev:*"
          }
        }
      }
    ]
  })
}

resource "aws_iam_role_policy_attachment" "attach_deploy_policy_to_role" {
  role       = aws_iam_role.keone_dev_site_deployer_role.name
  policy_arn = aws_iam_policy.keone_dev_cloudfront_s3_invalidation_policy.arn
}
