const WebpackMerge = require('webpack-merge');
const WebpackConfig = require('./webpack.config.js');

module.exports = WebpackMerge(WebpackConfig, {
    mode: 'development',
    devtool: 'inline-source-map',
    module: {
        rules: [{
            test: /\.ts?$/,
            use: [
                'ts-loader'
            ],
            exclude: /node_modules/
        }]
    },
});