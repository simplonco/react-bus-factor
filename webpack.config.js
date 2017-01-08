var webpack = require('webpack');
var path = require('path');

var SRC_DIR = path.resolve(__dirname, 'client/src');
var BUILD_DIR = path.resolve(__dirname, 'client/build');

module.exports = {
  entry: {
    app : SRC_DIR + '/index.jsx',
    vendors : [
      'jquery',
      'velocity-animate',
      'hammerjs',
      'react',
      'react-dom',
      'materialize-css/dist/js/materialize.js'
    ]
  },
  output: {
    path: BUILD_DIR,
    publicPath: 'http://127.0.0.1:8080',
    filename: 'bundle.js'
  },
  plugins: [

    new webpack.optimize.CommonsChunkPlugin( // Permet de découper mon bundle en plusieurs bouts. Un bout 
      'vendors',
      'vendors.bundle.js'
    ),

    new webpack.optimize.UglifyJsPlugin({
       compress: {
         warnings: false
       }
     }),

    new webpack.ProvidePlugin({ // Permet de définir les plugin qu'on veut rendre accessible à tout le scope de notre app.
      'window.$': 'jquery',
      'window.jQuery': 'jquery',
      'root.jQuery': 'jquery',
      'Vel': 'velocity-animate',
      'React': 'react',
      'window.React': 'react',
      '{render}': 'react-dom',
      '{window.render}': 'react-com',
    }),

    new webpack.optimize.DedupePlugin()
  ],
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : SRC_DIR,
        loader : 'babel'
      },
      {
        test: /\.(css|scss)$/,
        loader: 'style-loader!css-loader!sass-loader'
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url?limit=10000&mimetype=application/font-woff&name=fonts/[name].[ext]'
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file?name=fonts/[name].[ext]'
      },
      {
        test: /\.(png|jpg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file?name=img/[name].[ext]'
      }
    ]
  }
};