import SImage from './image.vue';

SImage.install = function (app) {
  app.component('SImage', SImage);
};

export { SImage };