const path = require('path');
const root = path.resolve('./');
const resolveTsconfigPathsToAlias = require('./utils/resolveTsconfigPathsToAlias.js');

module.exports = {
    module: {},
    resolve: {
        alias: resolveTsconfigPathsToAlias({
            tsconfigPath: path.resolve(root, 'tsconfig.json'),
            webpackConfigBasePath: './',
        }),
    },
};