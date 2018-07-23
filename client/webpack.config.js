const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");

// const htmlPlugin = new HtmlWebPackPlugin({
//     template: "./src/index.html",
//     filename: "./index.html"
// });

module.exports = {
    entry: ['babel-polyfill', './src/index.js'],

    output: {
        path: path.join(__dirname, 'public', 'js'),
        filename: 'bundle.js'
    },

    devtool: 'source-map',
    
    
    module: {
        rules: [
            {
                loader: 'babel-loader',
                test: /\.jsx?$/,
                exclude: /node_modules/
            }
        ]
    },

    devServer: {
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback: true,
        publicPath: '/js/'
    }

    // plugins: [htmlPlugin],

    // resolve: {
    //     extensions: ['js', 'jsx', 'json']
    // }
};