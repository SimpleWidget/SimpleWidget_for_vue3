<!--
 * @Author: Coan
 * @Date: 2022-09-30 13:40:02
 * @LastEditors: Coan
 * @LastEditTime: 2022-10-07 02:30:30
 * @FilePath: /SimpleWidget_for_vue3/dev/src/App.vue
 * @Description:
-->
<template>
  <h2 style="text-align: center">SimpleWidget_for_vue3_DEV</h2>

  <SButton class="optstyle" type="primary" size="large" :disabled="true"
    >SButton</SButton
  >
  <SButton class="optstyle" type="success" size="middle" disabled
    >SButton</SButton
  >
  <SButton class="optstyle" type="warning" size="small" :disabled="false"
    >SButton</SButton
  >
  <SButton class="optstyle" type="danger" size="mini">SButton</SButton>
  <SButton class="optstyle" type="info">SButton</SButton>
  <SButton class="optstyle" type="text" @click="dd" disabled>SButton</SButton>
</template>

<script lang="ts" setup>
function dd(e) {
  console.log(e.target);
}
</script>

<style lang="scss" scoped>
.optstyle {
  margin-right: 10px;
}
</style>
