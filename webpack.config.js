const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
        'core/helpers/logger.js': './src/core/helpers/logger.js',
        'core/helpers/request.js': './src/core/helpers/request.js',
        'core/helpers/onEnter.js': './src/core/helpers/onEnter.js',
        'core/helpers/polyfills.js': './src/core/helpers/polyfills.js',

        'server/middleware/catcher.js': './src/server/middleware/catcher.js'
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
                    presets: []
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
