import SDialog from './dialog.vue';

SDialog.install = function (app) {
  app.component('SDialog', SDialog);
};

export { SDialog };