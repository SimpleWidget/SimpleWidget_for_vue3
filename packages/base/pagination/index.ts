import SPagination from './pagination.vue';

SPagination.install = function (app) {
  app.component('SPagination', SPagination);
};

export { SPagination };