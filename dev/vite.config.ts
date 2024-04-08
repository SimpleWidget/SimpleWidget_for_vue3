/*
 * @Author: Klein
 * @Date: 2022-10-05 16:03:13
 * @LastEditors: Klein
 * @LastEditTime: 2024-04-09 00:22:32
 * @FilePath: /SimpleWidget_for_vue3/dev/vite.config.ts
 * @Description:
 */
import type { UserConfigExport } from 'vite';
import vue from '@vitejs/plugin-vue';
// import vueSetupExtend from 'unplugin-vue-setup-extend-plus/vite'
// import svgLoader from 'vite-svg-loader'

export default (): UserConfigExport => {
  return {
    base: './',
    plugins: [vue()], // vueSetupExtend(), svgLoader()
    server: {
      host: '0.0.0.0',
      port: 1216,
    },
  };
};
