import { defineConfig } from 'umi';

let apps = [
  {
    name: 'micro-app', // 唯一 id
    entry: '//localhost:3001', // html entry
  },
  {
    name: 'micro-vue-app', // 唯一 id
    entry: '//localhost:3002', // html entry
  },
];

if (process.env.NODE_ENV === 'production') {
  apps = [
    {
      name: 'micro-app', // 唯一 id
      entry: '//localhost:8001', // html entry
    },
    {
      name: 'micro-vue-app', // 唯一 id
      entry: '//localhost:8002', // html entry
    },
  ];
}

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  qiankun: {
    master: {
      // 注册子应用信息
      apps,
    },
  },
  routes: [
    { 
      path: '/',
      component: '@/layouts/index',
      routes: [
          { exact: true, path: '/', redirect: '/main' },
          {
            path: '/main', 
            component: '@/pages/index',
          },
          {
            name: 'micro-app',
            path: '/micro-app',
            microApp: 'micro-app',
            microAppProps: {
              autoSetLoading: true,
              className: 'myContainer',
              wrapperClassName: 'myWrapper',
            }
          },
          {
            name: 'micro-vue-app',
            path: '/micro-vue-app',
            microApp: 'micro-vue-app',
            microAppProps: {
              autoSetLoading: true,
              className: 'vueContainer',
              wrapperClassName: 'vueWrapper',
            }
          },
        ]
     },
  ],
  fastRefresh: {},
});
