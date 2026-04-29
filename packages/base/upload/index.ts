import SUpload from './upload.vue';

SUpload.install = function (app) {
  app.component('SUpload', SUpload);
};

export { SUpload };