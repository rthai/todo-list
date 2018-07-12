module.exports = {
  devtool: 'inline-sourcemap',
  entry: './index.js',
  output: {
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: [
          'react-hot',
          'babel'
        ]
      }
    ]
  }
};

// webpack 4 default entry is src/index.js
// webpack 4 default output is dist/main.js