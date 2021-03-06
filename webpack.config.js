
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output : {
    path: path.resolve(__dirname,'build'),
    filename: 'bundle.js',
    hashFunction: "xxhash64",
    publicPath: '/',
    clean:true,
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
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new CssMinimizerPlugin(),
      new TerserPlugin()
    ]
  }
 
}
