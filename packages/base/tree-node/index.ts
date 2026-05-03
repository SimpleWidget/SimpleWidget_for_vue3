import STreeNode from './tree-node.vue';

STreeNode.install = function (app) {
  app.component('STreeNode', STreeNode);
};

export { STreeNode };