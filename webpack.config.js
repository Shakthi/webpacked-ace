var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function (env) {
	let production= {
		devtool: 'none',
		mode: 'development',
		entry: './src/ace.js',
		
		output: {
			path: path.join(__dirname, 'dist'),
			filename: 'Aces6.js',
			libraryTarget: 'umd',
			library: 'Aces6',
			globalObject: 'this',
			libraryExport: "default"
		}
		
	};


	
	let development= {
		devtool: 'none',
		mode: 'development',
		mode: 'development',
		entry: './test/testeditor.js',
		output: {
			path: __dirname,
			filename: 'testEditor.js',
		},
		plugins: [new HtmlWebpackPlugin()],
	
		
	};

	if(env && env==='dev'){
		return [production,development];	
	}else{
		return [production];	
	}

}