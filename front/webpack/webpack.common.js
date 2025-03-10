var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, '../shared/static/'),
    publicPath: '/static/',
    filename: 'js/build.js',
    library: 'DemoTools',
  },
  plugins: [
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.s[ac]ss$/i,
        exclude: /node_modules/,
        type: "asset/resource",
        generator: {
          filename: "css/style.css",
        },
        use: ["sass-loader"],
      },
    ],
  },
  resolve: {
    alias: {
      // doesn't work but let's leave it like that for now.
      Src: path.resolve(__dirname, "src/"),
      Shared: path.resolve(__dirname, "src/shared/")
      // "@*": path.resolve(__dirname, "src/*")
    },
    extensions: ['.tsx', '.ts', '.js'],
  },
  devtool: 'source-map'
}