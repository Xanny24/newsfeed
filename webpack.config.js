const path = require("path");
const HtmmlWebpackPlugin = require("html-webpack-plugin");
const { template } = require("@babel/core");

module.exports = {
	mode: process.env.NODE_ENV || "production",
	entry: "./src/script.js",
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "bundle.[contenthash].js",
		publicPath: "./",
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				use: "babel-loader",
				exclude: /node_modules/,
			},
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"],
			},
			{
				test: /\.svg$/,
				type: "asset/resource",
			},
		],
	},
	plugins: [
		new HtmmlWebpackPlugin({
			template: "./src/index.html",
		}),
	],
	devServer: {
		open: true,
	},
};
