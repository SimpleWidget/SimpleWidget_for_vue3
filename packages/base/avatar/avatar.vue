<script lang="ts" setup>
import { ref, computed } from 'vue';

interface AvatarProps {
  src?: string;
  alt?: string;
  size?: 'large' | 'middle' | 'small' | 'mini' | number;
  round?: boolean;
  fit?: 'cover' | 'contain' | 'fill' | 'none';
  text?: string;
}

const props = withDefaults(defineProps<AvatarProps>(), {
  size: 'middle',
  round: false,
  fit: 'cover',
});

const isLoaded = ref(false);
const hasError = ref(false);

const handleLoad = () => {
  isLoaded.value = true;
};

const handleError = () => {
  hasError.value = true;
};

const sizeClass = computed(() => {
  if (typeof props.size === 'number') {
    return { width: `${props.size}px`, height: `${props.size}px` };
  }
  return {};
});

const classes = computed(() => ({
  'sw-avatar': true,
  [`sw-avatar--${props.size}`]: typeof props.size === 'string',
  'sw-avatar--round': props.round,
  [`sw-avatar--fit-${props.fit}`]: true,
}));
</script>

<template>
  <div :class="classes" :style="sizeClass">
    <img
      v-if="!hasError && src"
      :src="src"
      :alt="alt"
      class="sw-avatar__img"
      :style="{ objectFit: fit }"
      @load="handleLoad"
      @error="handleError"
    />
    <span v-else-if="text" class="sw-avatar__text">{{ text }}</span>
    <span v-else class="sw-avatar__error">{{ alt || '加载失败' }}</span>
  </div>
</template>

<style lang="scss" scoped>
@import '../../theme/avatar.scss';
</style>