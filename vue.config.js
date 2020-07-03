// const path = require('path');

module.exports = {
  // chainWebpack: (config) => { // 起别名方法一
  //   config.resolve.alias.set('@element', path.resolve(__dirname, 'src/components/element'));
  // },
  configureWebpack: { // 起别名方法二
    resolve: {
      alias: {
        '@element': '@/components/element',
      },
    },
  },
};
