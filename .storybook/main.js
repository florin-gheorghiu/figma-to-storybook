import { mergeConfig } from 'vite';
import path from 'path';

/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],

  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions',
    '@storybook/addon-mdx-gfm',
    '@chromatic-com/storybook'
  ],

  framework: {
    name: '@storybook/react-vite',
    options: {},
  },

  docs: {},

  async viteFinal(config) {
    return mergeConfig(config, {
      resolve: {
        alias: {
          'components': path.resolve(__dirname, '../src/components'),
        },
      },
    });
  },

  typescript: {
    reactDocgen: 'react-docgen-typescript'
  }
};

export default config;