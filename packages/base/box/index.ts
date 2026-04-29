import SBox from './box.vue';

SBox.install = function (app) {
  app.component('SBox', SBox);
};

export { SBox };
