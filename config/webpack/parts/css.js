module.exports = () => ({
  module: {
    rules: [
      // {
      //   test: /\.css$/,
      //   use: [
      //     'style-loader',
      //     {
      //       loader: 'css-loader',
      //       options: {
      //         sourceMap: true,
      //         importLoaders: 1,
      //         esModule: true,
      //         modules: {
      //           localIdentName: '[name]__[local]--[contenthash:base64:5]',
      //           exportLocalsConvention: 'camelCaseOnly'
      //         },
      //       },
      //     },
      //     'postcss-loader'
      //   ],
      // },
      {
      test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: {
                localIdentName: '[name]__[local]--[contenthash:base64:5]',
                exportLocalsConvention: 'camelCaseOnly'
              },
            },
          },
          'postcss-loader',
        ],
        include: /\.module\.css$/
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
        ],
        exclude: /\.module\.css$/
      }
    ],
  },
});
