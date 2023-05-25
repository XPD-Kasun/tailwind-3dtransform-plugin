// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Tailwind 3dtransform Plugin',
  tagline: 'Enable 3d transform classes for tailwindcss',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://xpd-kasun.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/tailwind-3dtransform-plugin/',
  trailingSlash: false,


  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'XPD-Kasun', // Usually your GitHub org/user name.
  projectName: 'tailwind-3dtransform-plugin', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },


  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/', 
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/XPD-Kasun/tailwind-3dtransform-plugin/edit/main/website/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: {
          trackingID: 'G-7T8WNGBKM9',
          anonymizeIP: true
        },        
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'https://repository-images.githubusercontent.com/631366890/9371b3cf-db9a-43e7-ad10-034f2578f2e0',
      navbar: {
        title: 'Tailwind 3d Transform Plugin',
        logo: {
          alt: 'tailwind-3dtransform-plugin',
          src: 'img/logo.png',
        },
        items: [
          { type: 'doc', docId: 'quick-start', label: 'Quick Start', position: 'right' },
          { type: 'doc', docId: '/category/guide', label: 'Guide', position: 'right'},
          { type: 'doc', docId: '/category/faq', label: 'FAQ', position: 'right'},
          { href: 'https://tailwindcss.com/docs/installation', label: 'TailwindCSS Docs', position: 'right'},
          { href: 'https://github.com/XPD-Kasun/tailwind-3dtransform-plugin', html: '<div class="github-logo"></div>', position: 'right'}
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Quick Start',
                to: '/',
              },
              {
                label: 'Guides',
                to: '/category/guide',
              },
              {
                label: 'FAQ',
                to: '/category/faq',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/XPD-Kasun/tailwind-3dtransform-plugin',
              }
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Tailwind Docs',
                href: 'https://tailwindcss.com/docs',
              },
              {
                label: 'MDN CSS Reference',
                href: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
              },
              
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} XPD::Kasun. Built with Docusaurus. MIT Licensed.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
    plugins:  [
      async function myPlugin(context, options) {
        return {
          name: "docusaurus-tailwindcss",
          configurePostCss(postcssOptions) {
            // Appends TailwindCSS and AutoPrefixer.
            postcssOptions.plugins.push(require("tailwindcss"));
            postcssOptions.plugins.push(require("autoprefixer"));
            return postcssOptions;
          },
        };
      },
    ],
};

module.exports = config;
