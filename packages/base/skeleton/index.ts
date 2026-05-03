import SSkeleton from './skeleton.vue';

SSkeleton.install = function (app) {
  app.component('SSkeleton', SSkeleton);
};

export { SSkeleton };