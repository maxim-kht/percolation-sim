var webpack = require('webpack');

var config = {
  entry: "./src/index.js",
  output: {
    filename: "public/bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-2']
        }
      },
    ]
  }
};

if (process.env.NODE_ENV === 'production') {
  config.plugins = [
    new webpack.EnvironmentPlugin({ NODE_ENV: JSON.stringify('production') }),
    new webpack.optimize.UglifyJsPlugin()
  ];
}

module.exports = config;
