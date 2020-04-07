const path = require('path');
const root = path.resolve('./');
const withSass = require('@zeit/next-sass');
const withCSS = require("@zeit/next-css");
const merge = require('webpack-merge')
const common = require(path.resolve(root, 'config/webpack.commons.js'));
const withImages = require('next-images')

module.exports = withImages(withCSS(withSass({
    webpack(config, options) {
        const mergeConfig = merge(config, common);
        mergeConfig.module.rules.push({
            test: /\.(png|jpg|gif|eot|ttf|woff|woff2)$/,
            use: {
                loader: 'url-loader',
                options: {
                    limit: 100000
                }
            }
        })

        mergeConfig.module.rules.push({
            test: /\.svg$/,
            use: [{
                loader: '@svgr/webpack',
                // options: {
                //     native: false,
                // },
            }, ],
        })


        return mergeConfig;
    }
})));