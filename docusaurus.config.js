module.exports = {
  title: "Hackney API Playbook",
  tagline:
    "A guide on Hackney's development practices, and how to follow them",
  url: "https:/playbook.hackney.gov.uk/API-Playbook",
  baseUrl: "/API-Playbook/",
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.png",
  organizationName: "lbhackney-it",
  projectName: "API-Playbook",
  themeConfig: { zoomSelector: '.markdown img',
    prism: {
      additionalLanguages: ["csharp"],
    },
    algolia: {
     // The application ID provided by Algolia
     appId: 'YOUR_APP_ID',

     // Public API key: it is safe to commit it
     apiKey: 'YOUR_SEARCH_API_KEY',

     indexName: 'YOUR_INDEX_NAME',

     // Optional: see doc section below
     contextualSearch: true,

     // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
     externalUrlRegex: 'external\\.com|domain\\.com',

     // Optional: Algolia search parameters
     searchParameters: {},

     // Optional: path for search page that enabled by default (`false` to disable it)
     searchPagePath: 'search',

     //... other Algolia params
   },
    navbar: {
      title: "API Playbook",
      logo: {
        alt: "API Playbook",
        src: "img/logo-long.svg",
      },
      items: [
        {
          href: "https://github.com/LBHackney-IT/API-Playbook",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    algolia: {
      appId: "KNMFHOJ4X2",
      apiKey: '4dc9b48c851c09d44e9cf356d5425867',
      indexName: 'hackney',
      placeholder: 'Search playbook'
    },
    footer: {
      style: "dark",
      links: [],
      copyright: `Made by HackIT.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/LBHackney-IT/API-Playbook/edit/master/",
        },
        theme: {
          customCss: [require.resolve("./src/docs.scss")],
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
        },
      },
    ],
  ],
  clientModules: [require.resolve("./src/docs.js")],
  plugins: ["docusaurus-plugin-sass",
             "plugin-image-zoom"
 ],
};
