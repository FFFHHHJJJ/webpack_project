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
    module:{
        rules:[
            {
                test:/\.css$/i,
                use:['style-loader','css-loader']
            }
        ]
    }
}