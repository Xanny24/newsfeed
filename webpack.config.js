const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin"); // Исправлено: правильное имя плагина

module.exports = {
	mode: process.env.NODE_ENV || "production",
	entry: "./src/script.js",
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "bundle.[contenthash].js",
		publicPath: "./", // Исправлено: базовый путь для сервера
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
		new HtmlWebpackPlugin({
			template: "./src/index.html", // Убедитесь, что путь правильный
		}),
	],
	devServer: {
		open: true,
		static: {
			directory: path.join(__dirname, "dist"), // Указывает, откуда сервер должен отдавать файлы
		},
		historyApiFallback: true, // Поддержка маршрутизации
	},
};
