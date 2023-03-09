const path = require('path')

module.exports= {
  entry: {
    index:'./src/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].min.js'
  },
  mode:'production',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use:{
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env']
            ]
          }
        }
      },
      {
        test: /\.css$/,
        use:[{loader:'style-loader'}, {loader:'css-loader'}]
      }
    ]
  }
}