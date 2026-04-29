import SBreadcrumb from './breadcrumb.vue';

SBreadcrumb.install = function (app) {
  app.component('SBreadcrumb', SBreadcrumb);
};

export { SBreadcrumb };