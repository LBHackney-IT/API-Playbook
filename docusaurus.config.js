const generateAnnouncementBar = () => {
  const environment = process.env.ENVIRONMENT
  if (environment === 'production') return {}
  return {
    id: 'environment_banner',
    content: `You are currently viewing the <b style="color: ${
      environment == 'development' ? '#e03c31' : '#00b341'
    }">${environment}</b> environment.`,
    backgroundColor: '#fafbfc',
    textColor: '#091E42',
    isCloseable: false,
  }
}

const generateTitle = () => {
  const environment = process.env.ENVIRONMENT
  if (environment === 'production') return 'API Playbook'

  return `API Playbook ${
    environment?.charAt(0).toUpperCase() + environment?.slice(1)
  }`
}

module.exports = {
  title: 'Hackney API Playbook',
  tagline: "A guide on Hackney's development practices, and how to follow them",
  url: 'https:/playbook.hackney.gov.uk',
  baseUrl: '/API-Playbook/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',
  organizationName: 'lbhackney-it',
  projectName: 'API-Playbook',
  themeConfig: {
    prism: {
      additionalLanguages: ['csharp'],
    },
    navbar: {
      title: generateTitle(),
      logo: {
        alt: 'API Playbook',
        src: 'img/logo-long.svg',
      },
      items: [
        {
          href: 'https://github.com/LBHackney-IT/API-Playbook',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    announcementBar: generateAnnouncementBar(),
    algolia: {
      appId: 'KNMFHOJ4X2',
      apiKey: '4dc9b48c851c09d44e9cf356d5425867',
      indexName: 'hackney',
      placeholder: 'Search playbook',
      searchParameters: {
        filters: "playbook_site:API-Playbook"
      }
    },
    footer: {
      style: 'dark',
      links: [],
      copyright: `Made by HackIT.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/LBHackney-IT/API-Playbook/edit/main/',
        },
        theme: {
          customCss: [require.resolve('./src/docs.scss')],
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
        },
      },
    ],
  ],
  clientModules: [require.resolve('./src/docs.js')],
  plugins: ['docusaurus-plugin-sass', 'plugin-image-zoom']
}
