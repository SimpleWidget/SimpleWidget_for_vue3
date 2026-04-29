import STable from './table.vue';

STable.install = function (app) {
  app.component('STable', STable);
};

export { STable };