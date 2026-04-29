import SCountDown from './count-down.vue';

SCountDown.install = function (app) {
  app.component('SCountDown', SCountDown);
};

export { SCountDown };