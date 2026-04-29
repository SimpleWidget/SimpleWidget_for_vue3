import SProgress from './progress.vue';

SProgress.install = function (app) {
  app.component('SProgress', SProgress);
};

export { SProgress };