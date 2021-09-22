module.exports = {
    //baseUrl从 Vue CLI 3.3 起已弃用，请使用publicPath。

    publicPath: './',//默认为/，可以改为相对路径,默认情况下，Vue CLI 会假设你的应用是被部署在一个域名的根路径上，例如 https://www.my-app.com/。如果应用被部署在一个子路径上，你就需要用这个选项指定这个子路径。例如，如果你的应用被部署在 https://www.my-app.com/my-app/，则设置 publicPath 为 /my-app/。
    /*这个值在开发环境下同样生效。如果你想把开发服务器架设在根路径，你可以使用一个条件式的值：*/
    // publicPath: process.env.NODE_ENV === 'production'
    //     ? './'
    //     : './',
    // outputDir: 'dist1',//默认值为dist，构建输出目录，若打包时不改会覆盖之前版本
    assetsDir: 'assets',//默认为'',静态文件目录(css,img,js,fonts)
    //indexPath:index.html,//默认为index.html，可改成其他文件///一般不改
    //filenameHashing:true,//默认为true，默认情况下，生成的静态资源在它们的文件名中包含了 hash 以便更好的控制缓存。///一般不改
    //pages:undefined,//在 multi-page 模式下构建应用。每个“page”应该有一个对应的 JavaScript 入口文件。其值应该是一个对象，对象的 key 是入口的名字,以下是官方说明
    /*
    pages: {
        index: {
            // page 的入口
            entry: 'src/index/main.js',
            // 模板来源
            template: 'public/index.html',
            // 在 dist/index.html 的输出
            filename: 'index.html',
            // 当使用 title 选项时，
            // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
            title: 'Index Page',
            // 在这个页面中包含的块，默认情况下会包含
            // 提取出来的通用 chunk 和 vendor chunk。
            chunks: ['chunk-vendors', 'chunk-common', 'index']
        },
        // 当使用只有入口的字符串格式时，
        // 模板会被推导为 `public/subpage.html`
        // 并且如果找不到的话，就回退到 `public/index.html`。
        // 输出文件名会被推导为 `subpage.html`。
        subpage: 'src/subpage/main.js'
    }
    */

    lintOnSave: false,//默认true，开启会降低执行效率，用途是eslint检测代码，可选值：true,false,'error'，当为true时检测代码，出现错误时提示信息会输出到命令行，不会编译失败；为'error',出现错误编译会失败
    //runtimeCompiler:false,//默认为false，是否使用包含运行时编译器的 Vue 构建版本。设置为 true 后你就可以在 Vue 组件中使用 template 选项了，但是这会让你的应用额外增加 10kb 左右。
    //transpileDependencies:[],//默认为[],默认情况下 babel-loader 会忽略所有 node_modules 中的文件。如果你想要通过 Babel 显式转译一个依赖，可以在这个选项中列出来。
    //productionSourceMap:true,默认为true，如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建
    //crossorigin:undefined,//默认为undefined设置生成的 HTML 中 <link rel="stylesheet"> 和 <script> 标签的 crossorigin 属性。需要注意的是该选项仅影响由 html-webpack-plugin 在构建时注入的标签 - 直接写在模版 (public/index.html) 中的标签不受影响。

    //integrity:false,//默认为false，在生成的 HTML 中的 <link rel="stylesheet"> 和 <script> 标签上启用 Subresource Integrity (SRI)。如果你构建后的文件是部署在 CDN 上的，启用该选项可以提供额外的安全性。需要注意的是该选项仅影响由 html-webpack-plugin 在构建时注入的标签 - 直接写在模版 (public/index.html) 中的标签不受影响。另外，当启用 SRI 时，preload resource hints 会被禁用，因为 Chrome 的一个 bug 会导致文件被下载两次。

    /*configureWebpack //调整 webpack 配置最简单的方式就是在 vue.config.js 中的 configureWebpack 选项提供一个对象：
    configureWebpack: config => {
        if (process.env.NODE_ENV === 'production') {
            // 为生产环境修改配置...
        } else {
            // 为开发环境修改配置...
        }
    }
    */
    /*
    chainWebpack，Vue CLI 内部的 webpack 配置是通过 webpack-chain 维护的。这个库提供了一个 webpack 原始配置的上层抽象，使其可以定义具名的 loader 规则和具名插件，并有机会在后期进入这些规则并对它们的选项进行修改。
    chainWebpack: config => {
        config.module
        .rule('vue')
        .use('vue-loader')
            .loader('vue-loader')
            .tap(options => {
            // 修改它的选项...
            return options
        })
    }
    */

    //css.modules:false,//默认为false,默认情况下，只有 *.module.[ext] 结尾的文件才会被视作 CSS Modules 模块。设置为 true 后你就可以去掉文件名中的 .module 并将所有的 *.(css|scss|sass|less|styl(us)?) 文件视为 CSS Modules 模块。详细解释：https://cli.vuejs.org/zh/guide/css.html#css-modules

    //css.extract:false,//默认值：生产环境下是 true，开发环境下是 false。是否将组件中的 CSS 提取至一个独立的 CSS 文件中 (而不是动态注入到 JavaScript 中的 inline 代码)。

    //css.sourceMap:false,//默认为false，是否为 CSS 开启 source map。设置为 true 之后可能会影响构建的性能。

    //css.loaderOptions，默认为{},向 CSS 相关的 loader 传递选项。见官方文档例子,具体见官方文档：https://cli.vuejs.org/zh/guide/css.html#%E5%90%91%E9%A2%84%E5%A4%84%E7%90%86%E5%99%A8-loader-%E4%BC%A0%E9%80%92%E9%80%89%E9%A1%B9

    /*
    css: {
        loaderOptions: {
            css: {
                // 这里的选项会传递给 css-loader
            },
            postcss: {
                // 这里的选项会传递给 postcss-loader
            }
        }
    }
    */

    //所有 webpack-dev-server 的选项都支持。具体内容参见官方文档https://webpack.js.org/configuration/dev-server/
    // devServer: {
    //   open: true,//服务开启后直接在浏览器中打开主页面
    //   host: 'localhost',//主机名
    //   port: 7070,//端口号
    //   https: false,//是否开启https
    //   hotOnly: false,//是否开启热模块更新
    //   proxy: {
    //     //配置跨域,可参见官方文档https://webpack.js.org/configuration/dev-server/#devserverproxy
    //     '/api': {
    //       target: 'http://localhost:7000/api/',//跨域地址
    //       ws: true,//如果要代理WebSockets,设置为true
    //       changOrigin: true,//默认flase,将主机头的原点更改为目标URL
    //       pathRewrite: {//如果不希望传递/api，则需要重写路径：
    //         '^/api': ''
    //       }
    //     }
    //   }
    // }

    //parallel:require('os').cpus().length > 1,//是否为 Babel 或 TypeScript 使用 thread-loader。该选项在系统的 CPU 有多于一个内核时自动启用，仅作用于生产构建。

    //pwa,向 PWA 插件传递选项,PWA是Progressive Web App的英文缩写， 翻译过来就是渐进式增强WEB应用， 是Google 在2016年提出的概念，2017年落地的web技术。目的就是在移动端利用提供的标准化框架，在网页应用中实现和原生应用相近的用户体验的渐进式网页应用。

    //pluginOptions:{}可以用来传递任何第三方插件选项,例如
    /*
    pluginOptions: {
        foo: {
            // 插件可以作为 `options.pluginOptions.foo` 访问这些选项。
        }
    }
    */

    //其他一些配置如Babel，官方建议使用babel.config.js;ESLint官方建议使用.eslintrc;TypeScript官方建议tsconfig.json
}