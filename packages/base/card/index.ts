import SCard from './card.vue';

SCard.install = function (app) {
  app.component('SCard', SCard);
};

export { SCard };