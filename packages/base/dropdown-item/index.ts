import SDropdownItem from './dropdown-item.vue';

SDropdownItem.install = function (app) {
  app.component('SDropdownItem', SDropdownItem);
};

export { SDropdownItem };