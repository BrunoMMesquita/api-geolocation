module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current'
        }
      }
    ],
    '@babel/preset-typescript'
  ],
  plugins: [
    [
      'module-resolver', {
        alias: {
          '@controller': './src/controller',
          '@service': './src/service',
          '@interfaces': './src/interfaces',
          '@utils': './src/utils'
        }
      }
    ]
  ],
  ignore: [
    '**/*.spec.ts'
  ]
}
