<script lang="ts" setup>
import { computed } from 'vue';

interface SkeletonProps {
  variant?: 'text' | 'circular' | 'rectangular';
  width?: string | number;
  height?: string | number;
  lines?: number;
  active?: boolean;
}

const props = withDefaults(defineProps<SkeletonProps>(), {
  variant: 'text',
  width: '100%',
  height: '16px',
  lines: 1,
  active: true,
});

const getStyles = () => {
  const style: Record<string, string> = {};
  if (typeof props.width === 'number') {
    style.width = `${props.width}px`;
  } else {
    style.width = props.width;
  }
  if (props.variant !== 'text') {
    if (typeof props.height === 'number') {
      style.height = `${props.height}px`;
    } else {
      style.height = props.height;
    }
  }
  return style;
};
</script>

<template>
  <div class="sw-skeleton">
    <div
      v-for="i in lines"
      :key="i"
      class="sw-skeleton__item"
      :class="[`sw-skeleton--${variant}`, { 'sw-skeleton--active': active }]"
      :style="getStyles()"
    />
  </div>
</template>

<style lang="scss" scoped>
@import '../../theme/skeleton.scss';
</style>