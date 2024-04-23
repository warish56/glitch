module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          // This needs to be mirrored in tsconfig.json
          '@common': './src/common',
          '@routes': './src/routes',
        },
      },
    ],
  ],
};
