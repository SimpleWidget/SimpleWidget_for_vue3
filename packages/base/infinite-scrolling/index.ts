import SInfiniteScrolling from './infinite-scrolling.vue';

SInfiniteScrolling.install = function (app) {
  app.component('SInfiniteScrolling', SInfiniteScrolling);
};

export { SInfiniteScrolling };