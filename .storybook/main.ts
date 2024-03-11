// Replace your-framework with the webpack-based framework you are using (e.g., react-webpack5)
import type { StorybookConfig } from '@storybook/react-webpack5';
import * as path from 'path';

const config: StorybookConfig = {
  framework: {
    name: '@storybook/react-webpack5',
    options: {
      builder: {
        useSWC: true,
      },
    },
  },

  swc: (config, options) => ({
    jsc: {
      transform: {
        react: {
          runtime: 'automatic',
        },
      },
    },
  }),

  webpackFinal: async (config) => {
    // add SCSS support for CSS Modules
    config.resolve = {
      ...(config.resolve || {}),
      extensions: ['.ts', '.tsx', '.js'],
      alias: {
        components: path.resolve(__dirname, '../src', 'components'),
        hooks: path.resolve(__dirname, '../src', 'hooks'),
        types: path.resolve(__dirname, '../src', 'types'),
      },
    };

    return config;
  },

  stories: ['../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
};

export default config;
