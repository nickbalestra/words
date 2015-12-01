var webpack = require('webpack');

module.exports = {
  entry: './public/app.js',
  
  output: {
    filename: 'public/bundle.js'
  },

  // module: {
  //   loaders: [
  //     {test: /\.js$/, loader: "babel", query: {presets:['react', 'es2015']}}
  //   ]
  // },

  plugins: [
    new webpack.ProvidePlugin({
      'angular': 'angular'
      // new webpack.optimize.CommonsChunkPlugin('public/shared.js'),
    })
  ]
};
