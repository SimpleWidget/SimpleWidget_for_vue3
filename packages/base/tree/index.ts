import STree from './tree.vue';

STree.install = function (app) {
  app.component('STree', STree);
};

export { STree };