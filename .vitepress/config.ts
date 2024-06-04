import { defineConfig } from 'vitepress'
import { transformerTwoslash } from '@shikijs/vitepress-twoslash'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Reactive VSCode',
  description: 'Develop VSCode extension with Vue Reactivity API',
  base: '/reactive-vscode/',
  lang: 'en-US',
  themeConfig: {
    nav: [
      { text: 'Examples', link: '/examples/' },
    ],

    sidebar: {
      '/examples': [
        {
          text: 'Examples',
          items: [
            { text: 'Index', link: '/examples/' },
          ],
        },
      ],
    },
  },

  markdown: {
    codeTransformers: [
      transformerTwoslash(),
    ],
  },
})
