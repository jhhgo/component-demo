module.exports = {
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                    },
                ],
            },
            {
                test: /\.less$/i,
                use: [
                    {
                        loader: "style-loader",
                    },
                    {
                        loader: "css-loader",
                    },
                    {
                        loader: "less-loader",
                    },
                ],
            }
        ]
    },
    externals: {
        "react": {
            commonjs: "react",//如果我们的库运行在Node.js环境中，import _ from 'lodash'等价于const _ = require('lodash')
            commonjs2: "react",//同上
            amd: "react",//如果我们的库使用require.js等加载,等价于 define(["lodash"], factory);
            root: "React"//如果我们的库在浏览器中使用，需要提供一个全局的变量‘_’，等价于 var _ = (window._) or (_);
        }
    }
}