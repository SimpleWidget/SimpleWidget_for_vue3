import SDropdown from './dropdown.vue';

SDropdown.install = function (app) {
  app.component('SDropdown', SDropdown);
};

export { SDropdown };