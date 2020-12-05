const path = require("path")
const webpack = require("webpack")


const config = {
	name: "browser",
	mode : "development",
	entry:  [
        path.join(process.cwd(), 'client/index.js')
	],
	output: {
		filename: 'bundle.js',
		path: path.join(process.cwd(), '/dist'),
		publicPath: '/dist/'
	},
	module:{
		rules:[
			{
				test: /\.jsx?$/,
				use: ['babel-loader'],
				exclude: /node_modules/
			},
			{
		        test: /\.css$/,
		        use: ['style-loader', 'css-loader']
		    }
		]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
          new webpack.NoEmitOnErrorsPlugin()
	]
}

module.exports = config