const path = require('path');
const APP_BASE_DIR = path.resolve(__dirname, '../../');
const APP_DIR_SRC = path.resolve(__dirname, '../../src');
const WebpackDashboard = require('webpack-dashboard/plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TsConfigPathsWebpackPlugin = require('tsconfig-paths-webpack-plugin');
const FixStyleOnlyEntriesPlugin = require('webpack-fix-style-only-entries');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    context: APP_BASE_DIR,
    entry: {
        app1: [
            APP_DIR_SRC.concat('/ts/app1.ts'),
            APP_DIR_SRC.concat('/scss/style1.scss')
        ],
        app2: [
            APP_DIR_SRC.concat('/ts/app2.ts'),
            APP_DIR_SRC.concat('/scss/style2.scss')
        ],
        app3: [
            APP_DIR_SRC.concat('/ts/app1.ts'),
            APP_DIR_SRC.concat('/scss/style1.scss'),
            APP_DIR_SRC.concat('/ts/app2.ts'),
            APP_DIR_SRC.concat('/scss/style2.scss')
        ],
        oneStyle1: APP_DIR_SRC.concat('/scss/style1.scss'),
        allStyles: [
            APP_DIR_SRC.concat('/scss/style1.scss'),
            APP_DIR_SRC.concat('/scss/style2.scss')
        ],
        oneTs: APP_DIR_SRC.concat('/ts/app1.ts'),
        allTs: [
            APP_DIR_SRC.concat('/ts/app1.ts'),
            APP_DIR_SRC.concat('/ts/app2.ts')
        ],
    },
    output: {
        filename: 'js/[name].js',
        path: APP_BASE_DIR.concat('/dist'),
        chunkFilename: '[id].js'
    },
    resolve: {
        extensions: ['.ts', '.js'],
        plugins: [
            new TsConfigPathsWebpackPlugin(),
        ]
    },
    module: {
        rules: [{
            test: /\.s[ac]ss$/i,
            use: [{
                    loader: MiniCssExtractPlugin.loader,
                },
                'css-loader',
                {
                    loader: 'sass-loader',
                    options: {
                        implementation: require('node-sass'),
                    }
                },
            ],
        },
        {
            test: /\.(jpe?g|png|gif|svg|ttf|woff|woff2)$/i,
            loader: 'file-loader'
        },
        ]
    },
    plugins: [
        new FixStyleOnlyEntriesPlugin(),
        new WebpackDashboard(),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].css'
        }),
    ]
};