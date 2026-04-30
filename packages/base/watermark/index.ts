import SWatermark from './watermark.vue';

SWatermark.install = function (app) {
  app.component('SWatermark', SWatermark);
};

export { SWatermark };