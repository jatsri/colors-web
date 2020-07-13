const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        client: './client.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "[name].js"
    },
    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
};
