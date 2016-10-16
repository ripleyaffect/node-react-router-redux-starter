module.exports = (config) => ({
  entry: __dirname + '/client',
  output: {
    path: __dirname + '/server/public',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.(es6|jsx?)$/,
        loader: 'babel',
        include: [
          __dirname + '/client',
          __dirname + '/shared'
        ],
        exclude: [/node_modules/],
        query: {
          presets: [
            ['es2015', { modules: false }],
            'stage-0',
            'react',
          ]
        }
      },
      {
        test: /\.less$/,
        loader: 'style!css!less'
      },
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.es6'],
    alias: {
      app: __dirname + '/client'
    }
  },
})