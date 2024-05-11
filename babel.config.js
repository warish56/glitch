module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          // This needs to be mirrored in tsconfig.json
          '@common': './src/common',
          '@app1Routes': './src/app1/routes',
          '@app1Screens': './src/app1/screens',
        },
      },
    ],
  ],
};
