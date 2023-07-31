import type { Preview } from '@storybook/react';

const customViewports = {
  Desktop: {
    name: 'Desktop',
    styles: {
      width: '1440',
      height: '963px',
    },
  },
  Mobile: {
    name: 'Mobile',
    styles: {
      width: '365',
      height: '801px',
    },
  },
};

const preview: Preview = {
  parameters: {
    layout: 'fullscreen',
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    viewport: {
      viewports: customViewports,
    },
  },
};

export default preview;
