const withSass = require('@zeit/next-sass');
const withCSS = require('@zeit/next-css');
// const webpackDevConfig = require('./webpack.config.dev');
// const webpackMerge = require('webpack-merge');

module.exports = withCSS(withSass({
    compress: false,
}));

