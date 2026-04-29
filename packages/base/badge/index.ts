import SBadge from './badge.vue';

SBadge.install = function (app) {
  app.component('SBadge', SBadge);
};

export { SBadge };
