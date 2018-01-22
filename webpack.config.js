/**
 * External dependencies
 */
const path = require("path");
const webpack = require( 'webpack' );
const ExtractTextPlugin = require( 'extract-text-webpack-plugin' );
const WebpackRTLPlugin = require( 'webpack-rtl-plugin' );

// Configuration for the ExtractTextPlugin.
const extractConfig = {
	use: [
		{ loader: 'raw-loader' },
	],
};

const config = {
	entry:{
      app: [path.join(__dirname, "src/index.js")],
	},
	output: {
		filename: 'dist/index.js',
		path: __dirname,
		library: [ 'wp', '[name]' ],
		libraryTarget: 'this',
	},
	resolve: {
		modules: [
			__dirname,
			'node_modules',
		],
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: 'babel-loader',
			},
		],
	},
	plugins: [
		new webpack.DefinePlugin( {
			'process.env.NODE_ENV': JSON.stringify( process.env.NODE_ENV || 'development' ),
		} ),
		new WebpackRTLPlugin( {
			suffix: '-rtl',
			minify: {
				safe: true,
			},
		} ),
		new webpack.LoaderOptionsPlugin( {
			minimize: process.env.NODE_ENV === 'production',
			debug: process.env.NODE_ENV !== 'production',
		} ),
	],
	stats: {
		children: false,
	},
};

switch ( process.env.NODE_ENV ) {
	case 'production':
		config.plugins.push( new webpack.optimize.UglifyJsPlugin() );
		break;

	default:
		config.devtool = 'source-map';
}

module.exports = config;
