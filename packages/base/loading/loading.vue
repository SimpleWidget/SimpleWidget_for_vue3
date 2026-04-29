<script setup lang="ts">
import { computed } from 'vue';

interface LoadingProps {
  visible?: boolean;
  text?: string;
  color?: string;
  fullscreen?: boolean;
  background?: string;
}

const props = withDefaults(defineProps<LoadingProps>(), {
  visible: false,
  fullscreen: false,
});

const classes = computed(() => ({
  'sw-loading--fullscreen': props.fullscreen,
}));

const styles = computed(() => {
  const style: Record<string, string> = {};
  if (props.color) {
    style['--sw-loading-color'] = props.color;
  }
  if (props.background) {
    style['--sw-loading-background'] = props.background;
  }
  return style;
});
</script>

<template>
  <div v-if="visible" class="sw-loading" :class="classes" :style="styles">
    <div class="sw-loading__animation">
      <svg viewBox="0 0 50 50" class="sw-loading__spinner">
        <circle cx="25" cy="25" r="20" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round">
          <animate attributeName="stroke-dasharray" values="1,150;90,150;90,150" dur="1.5s" repeatCount="indefinite" />
          <animate attributeName="stroke-dashoffset" values="0;-35;-125" dur="1.5s" repeatCount="indefinite" />
        </circle>
      </svg>
    </div>
    <span v-if="text" class="sw-loading__text">{{ text }}</span>
  </div>
</template>

<style lang="scss" scoped>
@import '../../theme/loading.scss';
</style>
