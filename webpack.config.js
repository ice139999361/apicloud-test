const path = require('path');
const webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
	entry: {
		test : './src/script/test.js'
	},
	output: {
		filename: '[name].js',
		path: __dirname + '/widget/script',
		publicPath: '/build'
	},
	module: {
	  loaders: [
	  	{ test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ }, 
	  	{ test: /\.css$/, loader: 'style!css' },
	  	{ test: /\.scss$/, loader: 'style!css!sass?sourceMap' },
	  	{ test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' }
	  ]
	},
	plugins: [
    	new CopyWebpackPlugin([
			{from: 'src/apicloud', to: __dirname+'/widget'},
			{from: 'src/html', to: __dirname+'/widget/html'}
    	])
  	]

}




