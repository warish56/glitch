module.exports = {
  root: true,
  extends: ['@react-native', 'prettier'],
  rules: {
    'prettier/prettier': 0,
  },
  ignorePatterns: [
    'android/*',
    'ios/*',
    'node_module/*',
    'vendor/*',
    'android/*',
    '.eslintric.cjs',
    '.prettierrc.js',
    'babel.config.js',
    'jest.config.js',
    'metro.config.js',
  ],
};
