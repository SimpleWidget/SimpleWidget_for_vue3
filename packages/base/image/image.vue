<script lang="ts" setup>
import { ref, computed } from 'vue';

interface ImageProps {
  src?: string;
  alt?: string;
  width?: string | number;
  height?: string | number;
  fit?: 'cover' | 'contain' | 'fill' | 'none';
  round?: boolean;
  block?: boolean;
}

const props = withDefaults(defineProps<ImageProps>(), {
  fit: 'cover',
  round: false,
  block: false,
});

const isLoaded = ref(false);
const hasError = ref(false);

const handleLoad = () => {
  isLoaded.value = true;
};

const handleError = () => {
  hasError.value = true;
};

const classes = computed(() => ({
  'sw-image': true,
  'sw-image--block': props.block,
  'sw-image--round': props.round,
  [`sw-image--fit-${props.fit}`]: true,
}));
</script>

<template>
  <div :class="classes" :style="{ width: width ? (typeof width === 'number' ? `${width}px` : width) : undefined, height: height ? (typeof height === 'number' ? `${height}px` : height) : undefined }">
    <img
      v-if="!hasError"
      :src="src"
      :alt="alt"
      @load="handleLoad"
      @error="handleError"
    />
    <div v-else class="sw-image__error">
      <slot name="error">{{ alt || '加载失败' }}</slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../../theme/image.scss';
</style>