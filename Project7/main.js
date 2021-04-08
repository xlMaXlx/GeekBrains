// webpack.config.js
const {
    VueLoaderPlugin
} = require('vue-loader')

module.exports = {
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
      },
      // это будет применяться к файлам `.js`
      // А ТАКЖЕ к секциям `<script>` внутри файлов `.vue`
            {
                test: /\.js$/,
                loader: 'babel-loader'
      },
      // это будет применяться к файлам `.css`
      // А ТАКЖЕ к секциям `<style>` внутри файлов `.vue`
            {
                test: /\.css$/,
                use: [
          'vue-style-loader',
          'css-loader'
        ]
      },
            {
                test: /\.scss$/,
                use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
            {
                test: /\.sass$/,
                use: [
    'vue-style-loader',
    'css-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            indentedSyntax: true,
                            // sass-loader >= 8
                            sassOptions: {
                                indentedSyntax: true
                            }
                        }
    }
  ]
},
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    hotReload: false // отключает горячую перезагрузку
                }
    }



    ]
    },
    plugins: [
    // убедитесь что подключили плагин!
    new VueLoaderPlugin()
  ]
}

// webpack.config.js
var MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    // другие настройки...
    module: {
        rules: [
      // ... другие правила опущены
            {
                test: /\.css$/,
                use: [
          process.env.NODE_ENV !== 'production'
            ?
                    'vue-style-loader'
            :
                    MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      }
    ]
    },
    plugins: [
    // ... плагин Vue Loader опущен
    new MiniCssExtractPlugin({
            filename: 'style.css'
        })
  ]
}
