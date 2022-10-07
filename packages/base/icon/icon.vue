<!--
 * @Author: Coan
 * @Date: 2022-10-07 16:14:34
 * @LastEditors: Coan
 * @LastEditTime: 2022-10-07 19:37:50
 * @FilePath: /SimpleWidget_for_vue3/packages/base/icon/icon.vue
 * @Description:
-->
<template>
  <i :class="`sw-icon-${name}`" />
</template>

<script setup lang="ts">
defineProps<{
  name: string;
}>();
</script>

<style lang="scss"></style>
