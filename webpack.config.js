const webpack = require('webpack')
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ASSET_PATH = process.env.ASSET_PATH || '/';
module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output : {
    path: path.resolve(__dirname,'build'),
    filename: 'bundle.js',
    hashFunction: "xxhash64",
    publicPath: ASSET_PATH,
  },
  module: {
    rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				}
			},
			{
				test: /\.html$/,
				use: [
					{
						loader: 'html-loader'
					}
				]
			},
      {
        test: /\.(css|scss)$/,
        use: [
          "style-loader",
					"css-loader",
					"sass-loader",
        ]
      },
      {
        test: /\.(png|jpeg|gif|svg)$/i,
        type: 'asset'
        
      },
	
		]
	},
  
  plugins: [
		new HtmlWebpackPlugin({
			template: './public/index.html',
			filename: './index.html'
		}),
    new MiniCssExtractPlugin({
      filename: '[name].css'
    }),
    new webpack.DefinePlugin({
      'process.env.ASSET_PATH': JSON.stringify(ASSET_PATH),
    }),
  ],
  devServer: {
    static: path.join(__dirname,'dist'),
    compress: true,
    port: 3005,
    historyApiFallback: true,
  }
 
}
