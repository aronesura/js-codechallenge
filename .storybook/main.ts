// Replace your-framework with the webpack-based framework you are using (e.g., react-webpack5)
import type { StorybookConfig } from '@storybook/react-webpack5';

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

  stories: ['../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
};

export default config;
