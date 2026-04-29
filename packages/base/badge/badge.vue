<template>
  <span class="sw-badge" :class="classes">
    <slot />
    <span v-if="dot" class="sw-badge__dot" />
    <span v-else-if="content !== undefined" class="sw-badge__content">
      {{ content }}
    </span>
  </span>
</template>

<script lang="ts" setup>
import { computed } from 'vue';

type BadgeType = 'primary' | 'success' | 'warning' | 'danger' | 'info';

interface BadgeProps {
  type?: BadgeType;
  content?: string | number;
  dot?: boolean;
}

const props = withDefaults(defineProps<BadgeProps>(), {
  type: 'primary',
  dot: false,
});

const classes = computed(() => [
  props.type ? `sw-badge-${props.type}` : '',
]);
</script>

<style lang="scss" scoped>
@import '../../theme/badge.scss';
</style>
