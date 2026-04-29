import SForm from './form.vue';

SForm.install = function (app) {
  app.component('SForm', SForm);
};

export { SForm };