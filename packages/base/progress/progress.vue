<script lang="ts" setup>
import { computed } from 'vue';

interface ProgressProps {
  percentage?: number;
  type?: 'default' | 'primary' | 'success' | 'danger' | 'warning' | 'info';
  height?: string | number;
  showText?: boolean;
  stripe?: boolean;
}

const props = withDefaults(defineProps<ProgressProps>(), {
  percentage: 0,
  type: 'primary',
  showText: true,
  stripe: false,
});

const clampedPercentage = computed(() => {
  if (props.percentage <= 0) return 0;
  if (props.percentage >= 100) return 100;
  return props.percentage;
});

const classes = computed(() => ({
  'sw-progress': true,
  'sw-progress--line': true,
  [`sw-progress__${props.type}`]: true,
  'sw-progress--stripe': props.stripe,
}));
</script>

<template>
  <div :class="classes">
    <div
      class="sw-progress__container"
      :style="{ height: typeof height === 'number' ? `${height}px` : height }"
    >
      <div
        class="sw-progress__bar"
        :style="{ width: `${clampedPercentage}%` }"
      />
    </div>
    <span v-if="showText" class="sw-progress__text">{{ clampedPercentage }}%</span>
  </div>
</template>

<style lang="scss" scoped>
@import '../../theme/progress.scss';
</style>