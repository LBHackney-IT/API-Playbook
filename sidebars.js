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
      'branching_strategy'
    ]
}
],
};
