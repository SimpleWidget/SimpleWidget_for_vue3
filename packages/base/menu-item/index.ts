import SMenuItem from './menu-item.vue';

SMenuItem.install = function (app) {
  app.component('SMenuItem', SMenuItem);
};

export { SMenuItem };