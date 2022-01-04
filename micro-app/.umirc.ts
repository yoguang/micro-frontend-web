import { defineConfig } from 'umi';
const packageName = require('./package.json').name;

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
  ],
  fastRefresh: {},
  qiankun: {
    slave: {},
  },
  chainWebpack(config, { webpack }) {
    config.merge({
      output: {
        library: `${packageName}-[name]`,
        libraryTarget: 'window',
        jsonpFunction: `webpackJsonp_${packageName}`,
        globalObject: 'window',
      }
    })
  },
});
