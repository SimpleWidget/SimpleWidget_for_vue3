import SMenu from './menu.vue';

SMenu.install = function (app) {
  app.component('SMenu', SMenu);
};

export { SMenu };