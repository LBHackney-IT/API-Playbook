module.exports = {
  docs: [
    {
      type: 'category',
      label: 'Release Notes',
      items: ['notes'],
    },
    {
      type: 'category',
      label: 'Home',
      items: ['index','api_standards', 'platform_api_vs_service_api', 'documentation'],
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
        'Designing your API': [ {'api_implementation_guidelines': ['api_design_principles', 'general_guidelines,security', 'compatibility', 'deprecation', 'naming_conventions', 'http', 'resources', 'pagination', 'data-formats', 'operation', 'references']}, 'error_codes','naming_conventions']
      },

      {
        'API Practices and Tools': ['linting','static_code_analysis',]
      },
      {
        'DevOps Practices': ['branching_strategy','deployment_pipeline', 'infrastructure']
      },

      {
        type: 'category',
        label: 'API Setup',
        items: ['preferred_tech_stack', 'api_boilerplate', 'clean_architecture', 'serverless_lambda', 'entity_framework']
      }
  ]
  },
  {
    type: 'category',
    label: "How to build an API",
    items: [{'Testing': ['tdd', 'unit_test', 'unit_testing', 'integration_tests']},{'Deploying your API': [ 'aws_ecs', 'lambda_best_practices', 'multiple_docker_containers']}]
  },
  {
    type: 'category',
    label: 'Monitoring',
    items: ['alerting', 'application_logging', 'centralised_logging', 'performance_monitoring','uptime_monitoring', {'Request Tracing': ['x_ray']}]
  },
  {
    type: 'category',
    label: 'Securing your API',
    items: ['api_keys', {'Lambda authoriser': ['generating_tokens']}]
  },
  {
    type: 'category',
    label: 'Other Useful Information',
    items: ['rds_access', 'ec2_access','postgresql', {'Data Migration': ['data_migration','pipeline_implementation']}]
  },
  {
    type: 'category',
    label: 'End to End Training',
    items: ['first_end_point'],
  },
  {
    type: 'category',
    label: 'Developer API Hub',
    items: ['developer_hub'],
  },
  {
    type: 'category',
    label: 'Contact Us',
    items: ['contact_us'],
  },
]
};
