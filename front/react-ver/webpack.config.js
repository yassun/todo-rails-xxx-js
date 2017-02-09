module.exports = {
  entry: {
    app: "./app/index.js"
  },
  output: {
    path: './public/react-ver',
    filename: "bundle.js"
  },
  module: {
    loaders: [{
      test: /\.css$/,
      loader: "style!css"
    }, {
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
     }]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', '.css']
  }
};
