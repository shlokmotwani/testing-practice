const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: './src/index.js',
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    mode: 'none',
    devtool: 'inline-source-map',
    plugins: [new HtmlWebpackPlugin(
        {
            title: 'Production',
        }
    )]
}