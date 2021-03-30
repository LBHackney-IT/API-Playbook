module.exports = {
  docs: [
    {
      type: 'category',
      label: 'Home',
      items: ['index','api_standards', 'platform_api_vs_service_api'],
    },
    {
      type: 'category',
      label: 'Principles',
      items: ['tdd', 'documentation',],
    },

      {
      type: 'category',
      label: 'Development Process',
      items: [
      {
        'Designing your API': ['api_design_principles', 'api_implementation_guidelines',]
      },
      'naming_conventions',
      'branching_strategy',

      {
        'DevOps Practices': ['development', 'deployment_pipeline', 'infrastructure']
      },
    {
    'Deploying your API': ['aws_lambda', 'aws_ecs', 'aws_good_practices']
    },

    {
    'Monitoring': ['centralised_logging', 'uptime_monitoring', 'security_monitoring', 'alerting']
    },

    {
    'Securing your API': ['api_keys', {'Lambda authoriser': ['generating_tokens']}]
    },
    {
    'How to build an API': ['preferred_tech_stack', 'api_boilerplate',{'Testing': ['unit_test', 'integration_tests', 'containerisation']}
      ]
    },
    {
      type: 'category',
      label: 'Other Useful Information',
      items: ['rds_access', 'ec2_access','postgresql', 'data_migration'],
    },

   ]
  }
 ],
};
