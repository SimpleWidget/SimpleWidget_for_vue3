/*
 * @Author: Klein
 * @Date: 2024-04-08 23:47:53
 * @LastEditors: Klein
 * @LastEditTime: 2024-04-09 00:18:27
 * @FilePath: /SimpleWidget_for_vue3/.eslintrc.js
 * @Description:
 */
module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  overrides: [
    {
      files: ["src/**/*.vue"],
      // 关闭组件名需要多个单词组成的规则
      rules: { "vue/multi-word-component-names": "off" },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["vue"],
  rules: {
    // 解决ESLint和Prettier的switch/case缩进冲突
    indent: ["error", 2, { SwitchCase: 1 }],
    "no-unused-vars": "off",
    // vite打包时自动去除console和debugger,所以这里直接关掉检查
    "no-console": "off",
    "no-debugger": "off",
    // 允许catch空着
    "no-empty": ["error", { allowEmptyCatch: true }],
  },
  // 在 extends 尾部加入 prettier 即可
  "extends": [
    "eslint:recommended",
    "plugin:vue/vue3-essential",
    "prettier"
  ],
  extends: [
    "eslint:recommended",
    "plugin:vue/vue3-essential",
    "plugin:prettier/recommended"
  ],
};