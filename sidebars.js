module.exports = {
  docs: [
    'notes',
    {
      type: 'category',
      label: 'Home',
      items: [
        'index',
        'api_standards',
        'platform_api_vs_service_api',
        'documentation',
        'our_ways_of_working',
        {
          'Development Lifecycle': [
            {
              'Designing your API': [
                'api_implementation_guidelines',
                'api_design_principles',
                'error_codes',
              ],
            },
            {
              'Implementation Guidelines': [
                'mandatory_standards_api',
                'general_guidelines',
                'security',
                'compatibility',
                'deprecation',
                'naming_conventions',
                'http',
                'resources',
                'pagination',
                'data-formats',
                'operation',
                'references',
              ],
            },
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Principles',
      items: [],
    },
    {
      type: 'category',
      label: 'Development Process',
      items: [
        {
          'API Practices and Tools': ['linting', 'static_code_analysis'],
        },
        {
          'DevOps Practices': [
            'branching_strategies',
            'deployment_pipeline',
            'infrastructure',
          ],
        },

        {
          type: 'category',
          label: 'API Setup',
          items: [
            'preferred_tech_stack',
            'api_boilerplate',
            'clean_architecture',
            'serverless_lambda',
            'entity_framework',
            'nuget_packages',
          ],
        },
        {
          type: 'category',
          label: 'Listeners',
          items: ['listener_tech_stack', 'listener_boilerplate'],
        },
      ],
    },
    {
      type: 'category',
      label: 'How to build an API',
      items: [
        {
          Testing: [
            'tdd',
            'unit_testing',
            'mock_unit_tests',
            'integration_tests',
          ],
        },
        {
          'Deploying your API': [
            'aws_ecs',
            'lambda_best_practices',
            'multiple_docker_containers',
            'dev-environment',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Production Checklist',
      items: ['debugging_apis', 'production_testing', 'production_steps'],
    },
    {
      type: 'category',
      label: 'Data Migration',
      items: ['data_migration', 'pipeline_implementation'],
    },
    {
      type: 'category',
      label: 'End to End Training',
      items: ['first_end_point_postgres', 'first_end_point_dynamo'],
    },
    {
      type: 'category',
      label: 'Other Useful Information',
      items: ['rds_access', 'ec2_access', 'postgresql','gitgaurdian', 'sonarcloud','serverless_safegaurd','feature-toggle','open_search'],
    },
    {
      type: 'category',
      label: 'Monitoring',
      items: [
        'alerting',
        'application_logging',
        'centralised_logging',
        'performance_monitoring',
        'uptime_monitoring',
        'x_ray',
        'cloudwatch-alarms',
      ],
    },
    {
      type: 'category',
      label: 'Securing your API',
      items: ['api_keys', 'lambda_authoriser'],
    },
    'eda',
    'target_type',
    'canaries_automation',
    'developer_hub',
    'FAQs',
    'contact_us',
  ],
}
