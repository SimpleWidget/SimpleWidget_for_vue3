import SBreadcrumbItem from './breadcrumb-item.vue';

SBreadcrumbItem.install = function (app) {
  app.component('SBreadcrumbItem', SBreadcrumbItem);
};

export { SBreadcrumbItem };