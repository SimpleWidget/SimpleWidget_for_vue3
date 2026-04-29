<script lang="ts" setup>
interface BreadcrumbItemProps {
  to?: string;
}

defineProps<BreadcrumbItemProps>();
</script>

<template>
  <div class="sw-breadcrumb__item">
    <a v-if="to" class="sw-breadcrumb__link" :href="to">
      <slot />
    </a>
    <slot v-else />
    <span v-if="!$slots.separator" class="sw-breadcrumb__separator">/</span>
    <slot v-else name="separator" />
  </div>
</template>

<style lang="scss" scoped>
@import '../../theme/breadcrumb.scss';
</style>