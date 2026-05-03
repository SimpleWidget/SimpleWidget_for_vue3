import SCalendar from './calendar.vue';

SCalendar.install = function (app) {
  app.component('SCalendar', SCalendar);
};

export { SCalendar };