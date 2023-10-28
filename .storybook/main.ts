const config = {
  staticDirs: ['../public'],
  stories: ['../components/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: ['@storybook/addon-essentials'],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  docs: {
    autodocs: true,
  },
  webpackFinal: (config) => {
    config.resolve.modules.push(`${process.cwd()}`);
    return config;
  },
};
export default config;
