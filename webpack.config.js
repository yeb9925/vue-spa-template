const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const config = require('./config')

function resolve(dir) {
  return path.join(__dirname, '.', dir)
}

module.exports = {
	mode: config.MODE,
  entry: './src/main.js',
  output: {
		filename: '[name].js',
		publicPath: '/',
    path: resolve('dist')
	},
  module: {
    rules: [
			{
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader'
      },
			{
				test: /\.vue$/,
				exclude: /node_modules/,
				loader: 'vue-loader',
				options: {
					loaders: {
							css: ['vue-style-loader', {
									loader: 'css-loader'
							}],
							js: [
									'babel-loader'
							],
					},
					cacheBusting: true
				}
			},
			{
				test: /\.css$/, 
				use: ['vue-style-loader', 'css-loader']
			}
    ]
	},
	resolve: {
		extensions: ['.js'],
		alias: {
				'vue': 'vue/dist/vue.common.js'
		}
},
}
