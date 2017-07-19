const webpack = require('webpack');
const path = require('path');

const ROOT_PATH = path.resolve(__dirname);
const APP_PATH = path.resolve(ROOT_PATH, '/src');
const BUILD_PATH = path.resolve(ROOT_PATH, '/build');

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: [
        './src/index.js'
    ],
    output: {
        filename: "bundle.js",
        path: BUILD_PATH,
        publicPath: "http://localhost:8080/build/"
    },

    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: 'babel-loader'
        }, {
            test: /\.(less|css)$/,
            use: ['style-loader', 'css-loader', 'postcss-loader'],
            include: APP_PATH
        }, {
            test: /\.(png|jpg|gif|md)$/,
            use: ['file-loader?limit=10000&name=[md5:hash:base64:10].[ext]']
        }, {
            test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
            use: ['url-loader?limit=10000&mimetype=image/svg+xml']
        }]
    },
    resolve: {
        extensions: ['.js', 'jsx', '.css'],
        modules: [
            path.resolve(__dirname, 'node_modules'),
            path.join(__dirname, './src')
        ]
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],

    devServer: {
        contentBase: ROOT_PATH,
        historyApiFallback: true,
        hot: true,
        open: true,
        inline: true,
        port: 8080
    }
};