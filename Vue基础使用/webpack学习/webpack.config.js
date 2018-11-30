var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry:'./entry.js',
    output:{
        path:__dirname +'/dist',
        filename: 'bundle.js'
    },
    module:{
        rules:[
        {
            test:/\.css$/,
            loader:'style-loader'
        },
        {
            test:/\.css$/,
            loader:'css-loader'
        },
        {
            test:/\.jpg$/,
            loader:'file-loader',
            options:{
                name:"[name].[ext]"
            }
        },
        ]
    },
    plugins:[new HtmlWebpackPlugin()]
};