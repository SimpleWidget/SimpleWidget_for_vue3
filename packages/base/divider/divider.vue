<script lang="ts" setup>
import { computed } from 'vue';

interface DividerProps {
  direction?: 'horizontal' | 'vertical';
  color?: string;
}

const props = withDefaults(defineProps<DividerProps>(), {
  direction: 'horizontal',
  color: '#e0e0e0',
});

const classes = computed(() => ({
  'sw-divider--vertical': props.direction === 'vertical',
}));
</script>

<template>
  <div class="sw-divider" :class="classes" :style="{ backgroundColor: color }" />
</template>

<style lang="scss" scoped>
@import '../../theme/divider.scss';
</style>
