import type { StorybookConfig } from '@storybook/react-webpack5';

const isProduction = process.env.NODE_ENV === 'production';

const config: StorybookConfig = {
  'stories': [
    '../src/**/*.mdx',
    '../src/**/stories/*.stories.@(js|jsx|mjs|ts|tsx)',
    ...(!isProduction ? ['../src/**/__test__/*.stories.@(js|jsx|mjs|ts|tsx)'] : [])
    
  ],
  'addons': ['@storybook/addon-webpack5-compiler-swc', '@storybook/addon-docs'],
  'framework': {
    'name': '@storybook/react-webpack5',
    'options': {}
  }
};
export default config;
