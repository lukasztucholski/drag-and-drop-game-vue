const path = require('path');

module.exports = {
  transpileDependencies: ['vuetify'],
  publicPath: '/dist',
  pages: {
    index: {
      entry: 'src/main.js',
      template: 'public/index.html',
      filename: 'i-want-to-play-a-game.html',
    },
  },
};
