<script lang="ts" setup>
import { computed } from 'vue';

interface BoxProps {
  padding?: string | number;
  margin?: string | number;
  border?: boolean;
  radius?: boolean;
}

const props = withDefaults(defineProps<BoxProps>(), {
  padding: 0,
  margin: 0,
  border: false,
  radius: false,
});

const styles = computed(() => {
  const s: Record<string, string> = {};
  if (props.padding) s.padding = typeof props.padding === 'number' ? `${props.padding}px` : props.padding;
  if (props.margin) s.margin = typeof props.margin === 'number' ? `${props.margin}px` : props.margin;
  return s;
});

const classes = computed(() => ({
  'sw-box--border': props.border,
  'sw-box--radius': props.radius,
}));
</script>

<template>
  <div class="sw-box" :class="classes" :style="styles">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
@import '../../theme/box.scss';
</style>
