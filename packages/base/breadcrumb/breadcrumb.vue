<script lang="ts" setup>
interface BreadcrumbProps {
  separator?: string;
}

withDefaults(defineProps<BreadcrumbProps>(), {
  separator: '/',
});
</script>

<template>
  <div class="sw-breadcrumb">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
@import '../../theme/breadcrumb.scss';
</style>