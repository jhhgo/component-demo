const path = require('path');
const components = require('./componentmap.json')
const webpackBaseConfig = require('./webpack.base')
const { merge } = require('webpack-merge')


module.exports = merge(webpackBaseConfig, {
    entry: path.resolve(__dirname, 'src/component/index.js'),
    output: {
        path: path.resolve(__dirname, 'lib'),
        publicPath: '/lib/',
        filename: 'components.min.js',  // 输出文件名
        library: 'components', // 组件库名称
        libraryTarget: 'umd',  //模块化格式
        umdNamedDefine: true
    }
})