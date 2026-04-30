import { defineConfig } from 'vitepress';

export default defineConfig({
  title: 'SimpleWidget',
  description: 'A cross-framework component library',
  themeConfig: {
    nav: [
      { text: 'Guide', link: '/guide/' },
      { text: 'Components', link: '/components/' }
    ],
    sidebar: {
      '/components/': [
        {
          text: 'Basic Components',
          items: [
            { text: 'Button', link: '/components/button' },
            { text: 'Icon', link: '/components/icon' },
            { text: 'Input', link: '/components/input' },
            { text: 'Badge', link: '/components/badge' },
            { text: 'Tag', link: '/components/tag' }
          ]
        },
        {
          text: 'Form Components',
          items: [
            { text: 'Checkbox', link: '/components/checkbox' },
            { text: 'Radio', link: '/components/radio' },
            { text: 'Switch', link: '/components/switch' },
            { text: 'Select', link: '/components/select' },
            { text: 'Slider', link: '/components/slider' }
          ]
        },
        {
          text: 'Layout Components',
          items: [
            { text: 'Layout', link: '/components/layout' },
            { text: 'Space', link: '/components/space' },
            { text: 'Divider', link: '/components/divider' }
          ]
        },
        {
          text: 'Feedback Components',
          items: [
            { text: 'Alert', link: '/components/alert' },
            { text: 'Dialog', link: '/components/dialog' },
            { text: 'Message', link: '/components/message' }
          ]
        }
      ]
    }
  }
});