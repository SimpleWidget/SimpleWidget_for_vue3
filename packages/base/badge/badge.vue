<template>
  <div class="sw-badge" :class="classList">
    <slot />
    <transition name="sw-badge">
      <sup v-if="isShow" class="sw-badge__content" :class="{ 'sw-badge__dot': dot }">
        {{ displayValue }}
      </sup>
    </transition>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';

type BadgeType = 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'default';

interface BadgeProps {
  value?: string | number;
  max?: number;
  dot?: boolean;
  show?: boolean;
  type?: BadgeType;
  background?: string;
  color?: string;
}

const props = withDefaults(defineProps<BadgeProps>(), {
  value: '',
  max: 99,
  dot: false,
  show: true,
  type: 'danger',
});

const classList = computed(() => [
  `sw-badge-${props.type}`,
  { 'sw-badge-dot': props.dot },
]);

const displayValue = computed(() => {
  if (props.dot) return '';
  if (typeof props.value === 'number' && props.max !== undefined) {
    return props.value > props.max ? `${props.max}+` : props.value;
  }
  return props.value;
});

const isShow = computed(() => {
  if (!props.show) return false;
  if (typeof props.value === 'number') {
    return props.value > 0;
  }
  return props.value !== '' && props.value !== undefined;
});
</script>

<style lang="scss" scoped>
@import '../../theme/badge.scss';
</style>