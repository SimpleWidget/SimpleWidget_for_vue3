/*
 * @Author: Coan
 * @Date: 2022-10-05 18:59:00
 * @LastEditors: Coan
 * @LastEditTime: 2022-10-05 19:07:41
 * @FilePath: /SimpleWidget_for_vue3/packages/base/button/index.ts
 * @Description:
 */
import SButton from './button.vue';

SButton.install = function (app) {
  app.component('SButton', SButton);
};

export { SButton };
