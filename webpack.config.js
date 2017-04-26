const path = require('path'),
      root = path.resolve(__dirname, '.'),//根目录
      HtmlWebpackPlugin = require('html-webpack-plugin'),
      webpack = require('webpack'),
      ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
    entry:path.join(__dirname, 'app/main.js'), //项目文件入口
    output: {
        path: path.join(root, 'dist'),//出口文件目录
        filename:'[name]-[hash].min.js'
    },
    devServer:{
        historyApiFallback: true,//404
        hot:true,
        inline:true,//客户端会在后端改变的情况下刷新
        port: 8001
    },
    devtool: 'source-map',//调试
    plugins:[
        new HtmlWebpackPlugin({
            filename:'index.html',
            template:'app/index.html',
            inject:'body'//script标签注入body底部
        }),
        new ExtractTextPlugin({filename:(getPath) => {return getPath('[name].css').replace('css/js', 'css');},allChunks:true}),//css单独构建
        new webpack.HotModuleReplacementPlugin()//dev热启动
    ],
    watch:true,
    resolve: {
        alias: {//配置组件路径
            components: path.join(root, 'app/components'),
            container:path.join(root,'app/container'),
            views: path.join(root, 'app/views'),
            img: path.join(root, 'app/img'),
            css:path.join(root,'app/css'),
            common: path.join(root, 'app/common'),
            router: path.join(root, 'app/common/router'),
            util:path.join(root,'app/common/util')
        },
        extensions: ['.js','.css']
    },
    module: {
        rules: [
            {test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/},//babel-loader
            {//css-loader
                test: /\.css$/,
                // we extract the styles into their own .css file instead of having
                // them inside the js.
                loader: ExtractTextPlugin.extract({fallback:"style-loader", use:"css-loader" })
            },

            //预留预编译
            {test: /\.less$/, loader: "style!css!less|postcss"},
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract({fallback:'', use:'css?modules&localIdentName=[name]---[local]---[hash:base64:5]!sass'})
            },


            {//静态资源
                test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
                loader: 'url-loader',
                options: {
                    limit: 10000
                }
            },
            {//html-loader
                test: /\.html$/,
                use: [ {
                    loader: 'html-loader',
                    options: {
                        minimize: true
                    }
                }]
            }
        ]
    }
};
