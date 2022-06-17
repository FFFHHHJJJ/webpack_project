const { join } = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    mode:'development',
    entry :'./src/main.js',
    output:{
        path:join(__dirname,'lib'),
        filename:'index.js',
        clean:true
    },
    plugins:[
        new htmlWebpackPlugin({
            template:join(__dirname,'public/index.html')
        })
    ],
    devServer:{
        open:true,
        port:30000
    },
    module:{
        rules:[
            {
                test:/\.css$/i,
                use:['style-loader','css-loader']
            },
            {
                test:/\.less$/i,
                use:['style-loader','css-loader','less-loader']
            },
            {
                test:/.(gif|png)$/i,
                type:'asset',
                parser:{
                    dataUrlCondition:{
                        maxSize:2*1024
                    }
                },
                generator:{
                    filename:'image/[hash:6][ext]'
                }
            },
            {
                test:/.(eot|svg|ttf|woff|woff2)$/i,
                type:'asset/resource',
                generator:{
                    filename:'font/[hash:6][ext]'
                }
            }
        ]
    }
}