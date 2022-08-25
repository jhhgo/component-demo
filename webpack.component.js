const path = require('path');
const components = require('./componentmap.json')
const webpackBaseConfig = require('./webpack.base')
const { merge } = require('webpack-merge')

let entries = {}
Object.keys(components).forEach(key => {
    entries[key] = path.resolve(__dirname, 'src/component', components[key])
})


module.exports = merge(webpackBaseConfig, {
    entry: entries,
    output: {
        path: path.resolve(__dirname, 'lib'),
        publicPath: '/lib/',
        filename: '[name].js',
        chunkFilename: '[id].js',
        library: '[name]', // 指定的就是你使用require时的模块名
        libraryTarget: 'umd',
        umdNamedDefine: true // 会对 UMD 的构建过程中的 AMD 模块进行命名。否则就使用匿名的 define
    }
})