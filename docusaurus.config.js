import { themes as prismThemes } from 'prism-react-renderer'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'NSI-SNT',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.ico',

  url: 'https://snt-nsi.netlify.app',
  baseUrl: '/',

  organizationName: 'davidcouronne',
  projectName: 'davidcouronne.github.io',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'fr',
    locales: ['fr'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/DavidCouronne/davidcouronne.github.io/edit/master/',
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
          showLastUpdateTime: true,
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/DavidCouronne/davidcouronne.github.io/edit/master/',
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
          blogSidebarTitle: 'Posts récents',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      docs: {
        sidebar: {
          hideable: true,
        },
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      algolia: {
        appId: 'YRG1QPI3M7',
        apiKey: '9b1581f5ad3123e0a958ccd4320dbf3c',
        indexName: 'snt-nsi',
        contextualSearch: true,
        searchParameters: {},
        searchPagePath: 'search',
      },
      metadata: [{ name: 'robots', content: 'max-image-preview:large' }],
      navbar: {
        hideOnScroll: true,
        title: 'NSI-SNT',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'sntSidebar',
            position: 'left',
            label: 'SNT',
          },
          {
            type: 'docSidebar',
            sidebarId: 'premiereSidebar', // Mis à jour
            position: 'left',
            label: 'NSI 1ère',
          },
          {
            type: 'docSidebar',
            sidebarId: 'termSidebar', // Mis à jour
            position: 'left',
            label: 'NSI Term',
          },
          {
            type: 'docSidebar',
            sidebarId: 'annalesSidebar',
            position: 'left',
            label: 'Annales',
          },
          {
            type: 'docSidebar',
            sidebarId: 'mathsSidebar',
            position: 'left',
            label: 'Maths',
          },
          {
            type: 'docSidebar',
            sidebarId: 'diversSidebar', // Mis à jour
            position: 'left',
            label: 'Ressources',
          },
          { to: '/blog', label: 'Blog', position: 'left' },
          {
            href: 'https://github.com/DavidCouronne/davidcouronne.github.io',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Cours',
            items: [
              {
                label: 'SNT',
                to: '/docs/snt/programme',
              },
              {
                label: '1ère NSI',
                to: '/docs/nsi-1ere/debut/programme',
              },
              {
                label: 'Terminale NSI',
                to: '/docs/nsi-term/intro',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'Ressources',
                to: '/docs/category/ressources-divers',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/DavidCouronne/davidcouronne.github.io',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} NSI-SNT, Inc. Built with Docusaurus.`,
      },
    }),
}

export default config
