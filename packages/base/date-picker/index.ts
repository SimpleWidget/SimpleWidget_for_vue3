import SDatePicker from './date-picker.vue';

SDatePicker.install = function (app) {
  app.component('SDatePicker', SDatePicker);
};

export { SDatePicker };