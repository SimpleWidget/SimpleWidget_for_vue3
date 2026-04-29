<script lang="ts" setup>
import { computed } from 'vue';

interface LayoutProps {
  direction?: 'horizontal' | 'vertical';
}

const props = withDefaults(defineProps<LayoutProps>(), {
  direction: 'horizontal',
});

const classes = computed(() => ({
  'sw-layout--vertical': props.direction === 'vertical',
}));
</script>

<template>
  <div class="sw-layout" :class="classes">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
@import '../../theme/layout.scss';
</style>
