module.exports = {
  entry: "./main.js",
  output: {
    path: __dirname,
    filename: "index.js",
    //devtoolLineToLine: true,
  },
  //devtool: 'eval',
  //devtool: 'eval-source-map',

  loaders: [
    {
      test: /\.es6$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel-loader'
    }
  ],

};
