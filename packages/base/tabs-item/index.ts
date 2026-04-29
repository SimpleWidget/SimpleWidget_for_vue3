import STabsItem from './tabs-item.vue';

STabsItem.install = function (app) {
  app.component('STabsItem', STabsItem);
};

export { STabsItem };