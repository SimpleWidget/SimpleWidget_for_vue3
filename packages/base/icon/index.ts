/*
 * @Author: Coan
 * @Date: 2022-10-07 16:14:41
 * @LastEditors: Coan
 * @LastEditTime: 2022-10-07 16:17:16
 * @FilePath: /SimpleWidget_for_vue3/packages/base/icon/index.ts
 * @Description:
 */
import SIcon from './icon.vue';

SIcon.install = function (app) {
  app.component('SIcon', SIcon);
};

export { SIcon };
