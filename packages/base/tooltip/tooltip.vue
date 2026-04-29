<template>
  <div
    v-if="$slots.default"
    class="sw-tooltip"
    :class="classes"
    :style="styles"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
  >
    <slot />
    <div v-if="visible && content" class="sw-tooltip__content" :class="`sw-tooltip--${position}`">
      {{ content }}
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref, watch } from 'vue';

type TooltipPosition = 'top' | 'bottom' | 'right' | 'left';
type TooltipState = 'hover' | 'active' | 'always';

interface TooltipProps {
  content?: string | number;
  position?: TooltipPosition;
  disabled?: boolean;
  state?: TooltipState;
  noArrow?: boolean;
  bold?: boolean;
  bright?: boolean;
  background?: string;
  fontColor?: string;
}

const props = withDefaults(defineProps<TooltipProps>(), {
  position: 'bottom',
  state: 'hover',
});

const visible = ref(false);

const classes = computed(() => [
  props.position ? `sw-tooltip--${props.position}` : '',
  {
    'sw-tooltip--disabled': props.disabled,
    'sw-tooltip--bold': props.bold,
    'sw-tooltip--no-arrow': props.noArrow,
    'sw-tooltip--bright': props.bright,
  },
]);

const styles = computed(() => {
  const style: Record<string, string> = {};
  if (props.background) {
    style['--sw-tooltip-background'] = props.background;
  }
  if (props.fontColor) {
    style['--sw-tooltip-font-color'] = props.fontColor;
  }
  return style;
});

function handleMouseEnter() {
  if (props.state === 'hover' && !props.disabled) {
    visible.value = true;
  }
}

function handleMouseLeave() {
  if (props.state === 'hover' && !props.disabled) {
    visible.value = false;
  }
}

watch(
  () => props.state,
  (newState) => {
    if (newState === 'always') {
      visible.value = true;
    } else if (newState === 'active') {
      visible.value = false;
    }
  },
  { immediate: true }
);
</script>

<style lang="scss" scoped>
@import '../../theme/tooltip.scss';
</style>
