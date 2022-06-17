const { join } = require('path')

module.exports = {
    mode:'development',
    entry :'./src/main.js',
    output:{
        path:join(__dirname,'lib'),
        filename:'index.js',
        clean:true
    }
}