<script lang="ts" setup>
import { computed } from 'vue';

interface SpaceProps {
  size?: 'small' | 'middle' | 'large';
  direction?: 'horizontal' | 'vertical';
}

const props = withDefaults(defineProps<SpaceProps>(), {
  size: 'middle',
  direction: 'horizontal',
});

const classes = computed(() => ({
  'sw-space--vertical': props.direction === 'vertical',
  [`sw-space--${props.size}`]: true,
}));
</script>

<template>
  <div class="sw-space" :class="classes">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
@import '../../theme/space.scss';
</style>
