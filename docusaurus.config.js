// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Furkan Taşkın',
  tagline: 'Personal wiki for my learning path',
  url: 'https://furkantaskin.netlify.app',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/me.png',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  markdown:{
    mermaid: true,
  },
  themes:['docusaurus-theme-search-typesense'],
  
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [{name: "keywords", content: "python, golang, frontend development"}],
      navbar: {
        title: 'Furkan Taskin',
        logo: {
          alt: 'Furkan Taskin',
          src: 'img/python-img.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Personal Notes',
          },
          // {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/furkantaskin/personalwiki',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      // footer: {
      //   style: 'dark',
      //   links: [
      //     {
      //       title: 'Docs',
      //       items: [
      //         {
      //           label: 'Tutorial',
      //           to: '/docs/intro',
      //         },
      //       ],
      //     },
      //     {
      //       title: 'Community',
      //       items: [
      //         {
      //           label: 'Stack Overflow',
      //           href: 'https://stackoverflow.com/questions/tagged/docusaurus',
      //         },
      //         {
      //           label: 'Discord',
      //           href: 'https://discordapp.com/invite/docusaurus',
      //         },
      //         {
      //           label: 'Twitter',
      //           href: 'https://twitter.com/docusaurus',
      //         },
      //       ],
      //     },
      //     {
      //       title: 'More',
      //       items: [
      //         {
      //           label: 'Blog',
      //           to: '/blog',
      //         },
      //         {
      //           label: 'GitHub',
      //           href: 'https://github.com/furkantaskin/personalwiki',
      //         },
      //       ],
      //     },
      //   ],
      //   copyright: `Copyright © ${new Date().getFullYear()} Furkan Taşkın`,
      // },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['powershell', 'rust', 'apacheconf', 'nginx', 'django', 'python'],
        magicComments: [
          {
            className: 'theme-code-block-highlighted-line',
            line: 'This will active',
            block: { start: 'highlight-start', end: 'highlight-end' },
          },
          {
            className: 'code-block-error-line',

            line: 'This will error',
            block: { start: 'error started', end: 'error ended' },
          },
        ],

      },
      typesense: {
        typesenseCollectionName: 'docusaurus-2', // Replace with your own doc site's name. Should match the collection name in the scraper settings.
        
        typesenseServerConfig: {
          nodes: [
            {
              host: 'p4t9rvn51jzwakgep-1.a1.typesense.net',
              port: 443,
              protocol: 'https',
            },
          ],
          apiKey: 'Go55cizAaR77WpPWv4mh0fvbLpjWZ7EU',
        },
  
        // Optional: Typesense search parameters: https://typesense.org/docs/0.21.0/api/search.md#search-parameters
        typesenseSearchParameters: {},
  
        // Optional
        contextualSearch: true,
      },
      algolia: {
      // The application ID provided by Algolia
      appId: 'WJTOALO3IX',

      // Public API key: it is safe to commit it
      apiKey: 'b940904dab27a99510a9724326ad6be9',

      indexName: 'personal_wiki',

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
    }),
};

module.exports = config;
