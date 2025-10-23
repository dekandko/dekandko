import type { Config } from '@netlify/visual-editor';

const config: Config = {
  siteName: 'dekandko',
  models: [
    {
      name: 'page',
      label: 'Page',
      type: 'page',
      filePath: 'content/pages/{slug}.md',
      fields: [
        { name: 'title', label: 'Title', type: 'string' },
        { name: 'body', label: 'Body', type: 'markdown', isBody: true }
      ]
    }
  ],
  pages: [
    {
      label: 'Home',
      filePath: 'content/pages/index.md',
      urlPath: '/',
      model: 'page'
    }
  ],
};

export default config;
