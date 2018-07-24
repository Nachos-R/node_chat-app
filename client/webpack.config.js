const path = require('path');

module.exports = () => {

    return {
        entry: ['babel-polyfill', './src/index.js'],

        output: {
            path: path.join(__dirname, 'public', 'js'),
            filename: 'bundle.js'
        },

        devtool: 'source-map',
        
        
        module: {
            rules: [{
                loader: 'babel-loader',
                test: /\.jsx?$/,
                exclude: /node_modules/
            }, {
                test:/\.css$/,
                use:['style-loader','css-loader']
            }]
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
};