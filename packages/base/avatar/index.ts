import SAvatar from './avatar.vue';

SAvatar.install = function (app) {
  app.component('SAvatar', SAvatar);
};

export { SAvatar };