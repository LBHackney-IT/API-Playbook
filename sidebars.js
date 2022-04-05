module.exports = {
  docs: [
    {
      'Release Notes': ['notes_v4','notes']
    },
    {
      type: 'category',
      label: 'Home',
      items: ['index','api_standards', 'platform_api_vs_service_api', 'documentation', 'bookmarks',
      {'Development Lifecycle':[
        {
          'Designing your API': ['api_implementation_guidelines','api_design_principles',
          'error_codes']
        },
        {
          'Implementation Guidelines': ['general_guidelines','security', 'compatibility', 'deprecation', 'naming_conventions', 'http', 'resources', 'pagination', 'data-formats', 'operation', 'references']
        },
      ]},
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
        'API Practices and Tools': ['linting','static_code_analysis']
      },
      {
        'DevOps Practices': ['branching_strategies','deployment_pipeline', 'infrastructure']
      },
    ]
  },
  {
    type: 'category',
    label: "Building your API",
    items: [{
      'API Setup':['preferred_tech_stack', 'api_boilerplate', 'clean_architecture', 'serverless_lambda', 'entity_framework']
    }
  ]
},
{
  type: 'category',
  label: "Testing your API",
  items: ['tdd', 'unit_testing', 'mock_unit_tests', 'integration_tests']
},
{
  type: 'category',
  label: "Deploying your API",
  items: [ 'aws_ecs', 'lambda_best_practices', 'multiple_docker_containers']
},
{
  type: 'category',
  label: 'Securing your API',
  items: ['api_keys', 'lambda_authoriser']
},
{
  type: 'category',
  label: 'Monitoring',
  items: ['alerting', 'application_logging', 'centralised_logging', 'performance_monitoring','uptime_monitoring', 'x_ray']
},
{
  type: 'category',
  label: 'Compliance Checklist',
  items: ['terraform_compliance', 'serverless_safeguards']
},
{
  type: 'category',
  label: 'Event Driven Architecture',
  items: ['eda',
  {
   'Listeners': ['listener_tech_stack', 'listener_boilerplate']
  }
]
},
{
  type: 'category',
  label: 'Production Checklist',
  items: ['debugging_apis', 'production_testing']
},
{
  type: 'category',
  label: 'Data Migration',
  items: ['data_migration','pipeline_implementation']
},
{
  type: 'category',
  label: "End to End Training",
  items: ['first_end_point_postgres', 'first_end_point_dynamo']
},
'developer_hub',
'api_specification',
{
  type: 'category',
  label: 'Other Useful Information',
  items: ['rds_access', 'ec2_access','postgresql']
},
'ways_of_working',
'FAQs',
'contact_us'
]
};
