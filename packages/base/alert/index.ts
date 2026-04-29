import SAlert from './alert.vue';

SAlert.install = function (app) {
  app.component('SAlert', SAlert);
};

export { SAlert };