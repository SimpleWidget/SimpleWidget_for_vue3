import SImagePreview from './image-preview.vue';

SImagePreview.install = function (app) {
  app.component('SImagePreview', SImagePreview);
};

export { SImagePreview };