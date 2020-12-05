const path = require("path")
const nodeExternals = require('webpack-node-externals')


const config = {
	name: "server", 
	target: "node",
	entry: [path.join(__dirname, './server/server.js')],
	output:{
		path: path.join(__dirname, '/dist/'),
		filename: "server.generated.js"
	},
	externals: [nodeExternals()],
	module:{
		rules:[
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: ['babel-loader']
			}
		]
	}
}

module.exports = config