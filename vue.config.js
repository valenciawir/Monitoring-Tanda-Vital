const { defineConfig } = require('@vue/cli-service')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

const plugins = []
if (process.argv.includes('--analyze')) {
  plugins.push(new BundleAnalyzerPlugin())
}

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    plugins
  },
})
