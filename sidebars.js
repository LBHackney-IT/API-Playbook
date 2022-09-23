module.exports = {
  docs: [
    {
      type: 'category',
      label: 'Release Notes',
      items:[
        'release-notes-v3',
        'release-notes-v4'
      ],
    },
    {
      type: 'category',
      label: 'Introduction',
      items: [
        'index',
        'platform_api_vs_service_api',
        'api_standards',
      ],
    },
    {
      type: 'category',
      label: 'Governance',
      items: [
        'our_ways_of_working',
        'developer_hub',
        {
          'API Documentation': [
            'swagger_documentation',
            'api_specification',
            'adr'
          ],
        },
      ],
    },  
    'FAQs',
    {
      type: 'category',
      label: "Development Lifecycle",
      items: [
        'development_lifecycle',
        {
          'Designing your API':[
            'naming_conventions',
            'api_design_principles',
            'api_implementation_guidelines',
          ],
        },
        {
          'How to build an API': [
            {
              'Preferred tech stack': [
                'serverless_lambda',
                'entity_framework',
                'open_search'
              ],
            },
            'api_boilerplate',
            'clean_architecture',
            {
              'API Versioning':[
                'feature-toggle'
              ],
            },
          ],
        },
        {
          'Implementing HTTP endpoints':[
            {
              'GET endpoint': [
                'get_postgres',
                'get_dynamodb',
              ],
            },
            {
              'POST endpoint': [
                'post_postgres',
                'post_dynamodb',
              ],
            },
            {
              'PATCH endpoint': [
                'patch_postgres',
                'patch_dynamodb'
              ],
            },
            {
              'DELETE endpoint': [
                'delete_postgres',
                'delete_dynamodb'
              ],
            },
          ],
        },
        {
          'Listeners': [
            'listener_intro',
            'listener_tech_stack',
            'listener_boilerplate'
          ],
        },
        {
          'Architecture principles':[
            'eda',
            {
              'NuGet Packages':[
                'nuget_packages',
                'shared-packages',
                'core_packages'
              ],
            },
            'target_type',
          ],
        },
        {
          'API Practices and tools':[
            'linting',
            'gitgaurdian',
            'sonarcloud',
            'terraform_compliance',
            'accessibility_testing'
          ],
        },
        {
          'Securing your API':[
            'api_keys',
            {
              'Lambda Authoriser': [
                'generating_tokens'
              ]
            }
          ]
        }
      ],
    },
    {
      type: 'category',
      label: 'Testing',
      items:[
        'tdd',
        {
          'Unit Testing':[
            'unit_testing'
          ],
        },
        {
          'End to End Testing':[
            'integration_tests'
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'DevOps Practices',
      items:[
        {
          'Introduction':[
            'deployment_pipeline',
          ],
        },
        {
          'Infrastructure As Code':[
            'infrastructure',
            'terraform_compliance',
          ]
        },
        'branching_strategies',
        {
          'Deploying your API':[
            'lambda_best_practices',
            'aws_ecs'
          ]
        },
        {
          'Monitoring':[
            'alerting',
            'application_logging',
            'centralised_logging',
            'performance_monitoring',
            'uptime_monitoring',
            'x_ray',
            'cloudwatch-alarms',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Data migration',
      items: [
        'data_migration',
        'pipeline_implementation',
        'data_migration_playbook'
      ]
    },
    {
      type: 'category',
      label: 'Support',
      items:[
        'loading_reference_data',
        'reindexing_elasticsearch_data',
        'cors_issues',
        'access_to_apis'
      ],
    },
    {
      type: 'category',
      label: 'Other Useful Infromation',
      items:[
        'rds_access', 
        'ec2_access',
        'postgresql',
        'ssm_secrets'
      ],
    },
    'contact_us'
  ],
}  