/*
 * @Author: Klein
 * @Date: 2024-04-08 22:49:37
 * @LastEditors: Klein
 * @LastEditTime: 2024-04-09 00:22:22
 * @FilePath: /SimpleWidget_for_vue3/vite.config.ts
 * @Description:
 */
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import eslint from "vite-plugin-eslint";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), eslint({ lintOnStart: true, cache: false })],
  esbuild: {
    // drop: env?.VITE_DROP_CONSOLE === "true" ? ["console", "debugger"] : [],
  },
});

