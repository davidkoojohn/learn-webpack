module.exports = {
  //devtool配置source maps  [source-map, cheap-module-source-map, eval-source-map(推荐开发阶段使用), cheap-module-eval-source-map(方法构建速度更快，但是不利于调试，推荐在大型项目考虑时间成本时使用。)]
  devtool: 'eval-source-map',

  //唯一入口文件
  entry:  __dirname + "/main.js",

  output: {
    //打包后的文件存放的地方
    path: __dirname + "/build",
    //打包后输出文件的文件名
    filename: "bundle.js"
  },

  devServer: {
    //实时刷新
    inline: true,
    port: 7777
  },
  module: {
    rules: [
      {
        //用以匹配loaders所处理文件的拓展名的正则表达式（必须）
        test: /(\.jsx|\.js)$/,
        use: {
          //loader的名称（必须）
          loader: "babel-loader"
        },
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader"
          }, {
            loader: "css-loader"
          }
        ]
      }
    ]
  }
};
