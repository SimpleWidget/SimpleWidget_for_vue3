<script lang="ts" setup>
import { computed } from 'vue';

type LinkType = 'primary' | 'success' | 'warning' | 'danger' | 'info';
type LinkUnderline = 'always' | 'hover' | 'never';

interface LinkProps {
  type?: LinkType;
  underline?: LinkUnderline;
  disabled?: boolean;
  href?: string;
}

const props = withDefaults(defineProps<LinkProps>(), {
  type: 'primary',
  underline: 'hover',
  disabled: false,
});

const classes = computed(() => [
  `sw-link--${props.type}`,
  `sw-link--underline-${props.underline}`,
  { 'sw-link--disabled': props.disabled },
]);
</script>

<template>
  <a class="sw-link" :class="classes" :href="disabled ? undefined : href">
    <slot />
  </a>
</template>

<style lang="scss" scoped>
@import '../../theme/link.scss';
</style>
