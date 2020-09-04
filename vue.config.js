module.exports = {
  publicPath: "./",
  devServer: {
    port: 8080, //设置端口号
    open: true, //启动服务，自动打开浏览器
    https: false, //是否开启https协议，false不开启
    host: "localhost", //主机名
    proxy:{  //配置解决跨域
      [process.env.VUE_APP_BASE_API]:{
        target:"peocess.env.VUE_APP_SERVICE_URL", //代理地址
        changeOrigin:true, //开启代理
        pathRewrite:{ //
          ['^' + process.env.VUE_APP_BASE_API]: ''
        }
      }
    }
  },
  lintOnSave: false, //关闭eslint
  productionSourceMap: false //打包时不生成.map文件
};

// module.exports = {
//   //=>process.env.NODE_ENV：环境变量中存储的是开发环境还是生产环境
//   publicPath: process.env.NODE_ENV === 'production' ? 'http://www.xxx.cn/' : '/',
//   //=>outputDir
//   //=>自定义目录名称，把生成的JS/CSS/图片等静态资源放置到这个目录中
//   assetsDir: 'assets',
//   //=>关闭生产环境下的资源映射（生产环境下不在创建xxx.js.map文件）
//   productionSourceMap: false,
//   //=>设置一些webpack配置项，用这些配置项和默认的配置项合并
//   configureWebpack: {
//   plugins: []
//   },
//   //=>直接去修改内置的webpack配置项
//   chainWebpack: config => {
//   //=>config:原始配置信息对象
//   config.module
//   .rule('images')
//   .use('url-loader')
//   .loader('url-loader')
//   .tap(options => {
//   options.limit = 200 * 1024;
//   return options;
//   });
//   },
//   //=>修改webpack-dev-server配置（尤其是跨域代理）
//   devServer: {
//   proxy: {
//   //请求地址 /user/add
//   //代理地址 http://api.xxx.cn/user/add
//   "/": {
//   changeOrigin: true,
//   target: "http://api.xxx.cn/"
//   }
//   }
//   },
//   //=>多余1核cpu时：启动并行压缩
//   parallel: require('os').cpus().length > 1
//   }
