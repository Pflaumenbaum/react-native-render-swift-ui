import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'rn-render-swift-ui',
  tagline: 'Create beautiful SwiftUI views just with react native ',
  favicon: 'img/favicon.ico',
 

  // Set the production url of your site here
  url: 'https://rn-render-swift-ui.netlfy.app',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Pflaumenbaum', // Usually your GitHub org/user name.
  projectName: 'react-native-render-swift-ui', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/Pflaumenbaum/react-native-render-swift-ui/tree/main/docs',
        },
        
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/banner.PNG',
    navbar: {
      title: 'rn-render-swift-ui',
      logo: {
        alt: 'My Site Logo',
        src: 'img/icon.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Docs',
        },
   
        {
          href: 'https://github.com/Pflaumenbaum/react-native-render-swift-ui',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Overview',
              to: '/docs/intro',
            },
            {
              label: 'Installation',
              to: '/docs/installation',
            },
            {
              label: 'Usage',
              to: '/docs/usage',
            },
          ],
        },
          {
          title: 'More',
          items: [
            
            {
              label: 'GitHub',
              href: 'https://github.com/Pflaumenbaum/react-native-render-swift-ui',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} <b>react-native-render-swift-ui - </b> <i style="font-size: 8">Pflaumenbaum</i>  <br> <i style="font-size: 12px">Docs created with Docusaurus</i>`,
    },
   
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    
  } satisfies Preset.ThemeConfig,
  //plugins: [require.resolve("@cmfcmf/docusaurus-search-local")],

};

export default config;
