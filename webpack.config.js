const path = require('path');
const nodeExternals = require('webpack-node-externals');
const WebpackShellPlugin = require('webpack-shell-plugin');

module.exports = {
    watch: process.env.NODE_ENV === 'development',
    mode: process.env.NODE_ENV,
    entry: './src/index.ts',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'index.js'
    },
    module: {
        rules: [
            {
                test: /\.ts$/i,
                use: ['ts-loader']
            }
        ]  
    },
    target: 'node',
    externals: [
        nodeExternals()
    ],
    plugins: [
        new WebpackShellPlugin({
            onBuildEnd: [`cross-env NODE_ENV=${process.env.NODE_ENV} nodemon ./build`]
        })
    ],
    resolve: {
        extensions: ['.ts', '.js'],
    }
}
