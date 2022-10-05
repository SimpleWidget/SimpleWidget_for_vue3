import { createApp } from 'vue';
import App from './App.vue';

// 移动端测试
// import VConsole from 'vconsole'
// new VConsole()

// 开发阶段引入
import { SButton } from '../../packages/base/button/index';

// 打包阶段引入
// import FightingDesign from '../dist'
// import '../dist/dist/index.css'

// console.log(FightingDesign);

createApp(App).use(SButton).mount('#dev');
