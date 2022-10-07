/*
 * @Author: Coan
 * @Date: 2022-09-30 13:40:02
 * @LastEditors: Coan
 * @LastEditTime: 2022-10-07 17:18:16
 * @FilePath: /SimpleWidget_for_vue3/dev/src/main.ts
 * @Description:
 */
import { createApp } from 'vue';
import App from './App.vue';

// 移动端测试
// import VConsole from 'vconsole'
// new VConsole()

// 开发阶段引入
import { SButton } from '../../packages/base/button/index';
import { SIcon } from '../../packages/base/icon/index';
import '../../packages/theme/common/base.scss';

// 打包阶段引入
// import FightingDesign from '../dist'
// import '../dist/dist/index.css'

// console.log(FightingDesign);

createApp(App).use(SButton).use(SIcon).mount('#dev');
