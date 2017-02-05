const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
        'core/helpers/logger.js': './src/core/helpers/logger.js',
        'core/helpers/request.js': './src/core/helpers/request.js',
        'core/helpers/onEnter.js': './src/core/helpers/onEnter.js',
        'core/helpers/polyfills.js': './src/core/helpers/polyfills.js'
    },
    output: {
        filename: 'lib/[name]',
        libraryTarget: 'umd'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: [/src\/core/],
                query: {
                    cacheDirectory: false,
                    presets: [],
                    plugins: [
                        "add-module-exports",
                        "transform-es2015-modules-commonjs",
                        "transform-es2015-destructuring",
                        "transform-object-rest-spread",
                        "transform-decorators-legacy",
                        "transform-class-properties",
                        "inferno",
                        ["fast-async"]
                    ]
                }
            }
        ]
    },


    resolve: {
        alias: {
            'core': path.resolve('src/core')
        }
    },

    plugins: [
        new webpack.ProvidePlugin({
            Inferno: 'inferno',
        })
    ]
};
