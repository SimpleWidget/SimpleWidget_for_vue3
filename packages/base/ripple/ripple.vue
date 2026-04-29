<script lang="ts" setup>
import { ref, toRefs, reactive } from 'vue';

type FightingType = 'default' | 'primary' | 'success' | 'danger' | 'warning' | 'info';

interface RippleProps {
  ripplesColor?: string;
  duration?: number;
  type?: FightingType;
  disabled?: boolean;
  startOpacity?: number;
  endOpacity?: number;
}

const props = withDefaults(defineProps<RippleProps>(), {
  duration: 400,
  type: 'default',
});

const rippleRef = ref<HTMLElement>();

const COLOR_LIST: Record<string, string> = {
  default: '#f0f0f0',
  primary: '#2d5af1',
  success: '#52b35e',
  danger: '#ff0200',
  warning: '#fcc202',
  info: '#1d1d1f',
};

const handleClick = (evt: MouseEvent): void => {
  if (props.disabled) return;

  const ripplesColor = props.ripplesColor || COLOR_LIST[props.type || 'default'];
  const rippleEl = document.createElement('span');
  rippleEl.className = 'sw-ripple__animation';

  const rect = (evt.currentTarget as HTMLElement).getBoundingClientRect();
  const x = evt.clientX - rect.left;
  const y = evt.clientY - rect.top;

  rippleEl.style.left = `${x}px`;
  rippleEl.style.top = `${y}px`;
  rippleEl.style.background = ripplesColor;

  if (rippleRef.value) {
    rippleRef.value.appendChild(rippleEl);

    setTimeout(() => {
      rippleEl.remove();
    }, props.duration);
  }
};
</script>

<template>
  <div ref="rippleRef" class="sw-ripple" @click="handleClick">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
@import '../../theme/ripple.scss';
</style>
