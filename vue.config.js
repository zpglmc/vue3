const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,//关闭保存文件时的Elint检测
  productionSourceMap: false //去除打包后生成的.map文件
});
