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
        port:80
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
                }
            }
        ]
    }
}