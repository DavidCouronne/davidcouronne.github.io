---
title: 'Installer docusaurus: le guide complet'
description: Comment installer et paramétrer docusaurus v2
tags: [docusaurus, installation, développement]
author: David Couronné
---

import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

Dans cet article, nous allons voir comment installer et paramétrer docusaurus v2.

<!--truncate-->

## Installation de docusaurus

```bash
npx @docusaurus/init@latest init my-website classic
```

## Localisation: changer la langue

Nous allons ajouter le support i18n pour la langue française.

Dans un premier temps, nous allons écrire les traductions anglaises de manière automatique:

<Tabs
defaultValue="npm"
values={[
{ label: 'npm', value: 'npm', },
{ label: 'Yarn', value: 'yarn', },
{ label: 'pnpm', value: 'pnpm', },
]
}>
<TabItem value="npm">

```bash
npm run write-translations
```

</TabItem>
<TabItem value="yarn">

```bash
yarn write-translations
```

</TabItem>
<TabItem value="pnpm">

```bash
pnpm run write-translations
```

</TabItem>

</Tabs>

Cela va nous créer un dossier `i18n` ainsi que le sous-dossier `en`.

Même si tout notre contenu sera en français, cela nous laisse la possibilité d'avoir des versions anglaises de nos articles.

En suite dans le fichier `docusaurus.config.js` nous allons ajouter les lignes suivantes:

```js
i18n: {
    defaultLocale: 'fr',
    locales: ['en', 'fr'],
}
```

Le fichier devrait alors ressembler à :

```js title="docusaurus.config.js"
module.exports = {
  i18n: {
    defaultLocale: 'fr',
    locales: ['en', 'fr'],
  },
  title: 'My Site',
  tagline: 'Dinosaurs are cool',
  ...
```

Puis nous allons une nouvelle fois exécuter la commande suivante:

```bash
pnpm write-translations
```

Nous allons avoir un sous-dossier `fr` dans le dossir `i18n`.

Pour vérifier que tout marche bien:

```bash
pnpm run start
```

En allant dans le blog, on doit voir que les dates sont francisées,
par exemple :"30 mai 2019 · Une minute de lecture"

Bien sûr, les textes ne sont pas traduits automatiquement, il faut un petit effort supplémentaire !

## Premiers pas vers la personnalisation

On se place dans le fichier `docusaurus.config.js`.

Les lignes surlignées dans le code ci-dessous sont à changer:

```js title = "docusaurus.config.js"
/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  i18n: {
    defaultLocale: 'fr',
    locales: ['en', 'fr'],
  },
  // highlight-start
  title: 'My Site',
  tagline: 'Dinosaurs are cool',
  url: 'https://your-docusaurus-test-site.com',
  // highlight-end
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  // highlight-start
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.
  // highlight-end
  themeConfig: {
    navbar: {
      // highlight-start
      title: 'My Site',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },

      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Tutorial',
        },
        { to: '/blog', label: 'Blog', position: 'left' },
        {
          href: 'https://github.com/facebook/docusaurus',
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
              label: 'Tutorial',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
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
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      // highlight-end
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            // highlight-start
            'https://github.com/facebook/docusaurus/edit/master/website/',
          // highlight-end
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            // highlight-start
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
          // highlight-end
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
}
```

Par exemple, pour le site que vous êtes en train de visiter:

```js
...
presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/DavidCouronne/davidcouronne.github.io/edit/master/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/DavidCouronne/davidcouronne.github.io/edit/master/',
        },
        ...
```

## Utiliser KateX

Pour le moment docusaurus ne supporte pas les denières versions de `remark`, on doit dont installer des anciennes versions.

```bash
pnpm add rehype-katex@^4.0.0 remark-math@^3.0.1
```

Ensuite, tout en haut de `docusaurus.config.js`, ajouter les deux lignes suivantes:

```js title="docusaurus.config.js"
const math = require('remark-math')
const katex = require('rehype-katex')
```

Ensuite, dans `module.export`, il faut ajouter:

```js title="docusaurus.config.js"
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X',
      crossorigin: 'anonymous',
    },
  ],
```

Et enfin, dans les presets docs et blog:

```js title="docusaurus.config.js"
remarkPlugins: [math],
rehypePlugins: [katex],
```

Ce qui doit donner quelque chose du genre:

```js title="docusaurus.config.js"
const math = require('remark-math')
const katex = require('rehype-katex')
module.exports = {
  title: ...,
  tagline: ...,
  url: ...,
  baseUrl: '/',
  ...
  // highlight-start
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X',
      crossorigin: 'anonymous',
    },
  ],
  // highlight-end
  themeConfig: {
...
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl:...,
          // highlight-start
          remarkPlugins: [math],
          rehypePlugins: [katex],
          // highlight-end
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: ...,
          // highlight-start
          remarkPlugins: [math],
          rehypePlugins: [katex],
          // highlight-end
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
```

:::tip **Fundamental Theorem of Calculus**  
Let $f:[a,b] \to \R$ be Riemann integrable.

Let $F:[a,b]\to\R$ be $F(x)=\int_{a}^{x}f(t)dt$.

Then $$F$$ is continuous, and at all $x$ such that $f$ is continuous at $x$,
$F$ is differentiable at $x$ with $F'(x)=f(x)$.
:::

## Changer de thème pour la coloration syntaxique

Docusaurus utilise `prismjs` pour la coloration du code.

Les paramètres de ce site sont:

```js title="docusaurus.config.js"
...
themeConfig: {
    prism: {
      theme: require('prism-react-renderer/themes/github'),
      darkTheme: require('prism-react-renderer/themes/dracula'),
    },
    ...
```

Et pour surligner les lignes:

```css title="src/css/custom.css"
.docusaurus-highlight-code-line {
  background-color: rgba(0, 0, 0, 0.1);
  display: block;
  margin: 0 calc(-1 * var(--ifm-pre-padding));
  padding: 0 var(--ifm-pre-padding);
}

html[data-theme='dark'] .docusaurus-highlight-code-line {
  background-color: rgba(0, 0, 0, 0.3);
}
```
