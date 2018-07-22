const path = require('path');

module.exports = {
    entry: './src/index.js',

    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public/js')
    },

    devtool: 'source-map',
    
    
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },

    // resolve: {
    //     extensions: ['js', 'jsx', 'json']
    // }
};