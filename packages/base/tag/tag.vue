<template>
  <transition name="sw-tag">
    <span
      class="sw-tag"
      :class="classList"
      :style="style"
      @click="handleClick"
    >
      <slot name="before" />
      <slot />
      <slot name="after" />
      <span v-if="close" class="sw-tag__close" @click.stop="handleClose">
        <i class="sw-icon sw-icon-close" />
      </span>
    </span>
  </transition>
</template>

<script lang="ts" setup>
import { computed } from 'vue';

type TagType = 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'default';
type TagSize = 'large' | 'middle' | 'small' | 'mini';

interface TagProps {
  type?: TagType;
  size?: TagSize;
  close?: boolean;
  round?: boolean;
  simple?: boolean;
  block?: boolean;
  line?: boolean;
  background?: string;
  color?: string;
  onClose?: (e: MouseEvent) => void;
  onClick?: (e: MouseEvent) => void;
}

const props = withDefaults(defineProps<TagProps>(), {
  type: 'primary',
  size: 'middle',
  close: false,
  round: false,
  simple: false,
  block: false,
  line: false,
});

const emit = defineEmits<{
  (e: 'close', event: MouseEvent): void;
  (e: 'click', event: MouseEvent): void;
}>();

const classList = computed(() => [
  `sw-tag-${props.type}`,
  `sw-tag-${props.size}`,
  {
    'sw-tag-round': props.round,
    'sw-tag-simple': props.simple,
    'sw-tag-block': props.block,
    'sw-tag-line': props.line,
  },
]);

const style = computed(() => {
  const s: Record<string, string> = {};
  if (props.background) s.backgroundColor = props.background;
  if (props.color) s.color = props.color;
  return s;
});

function handleClose(e: MouseEvent) {
  emit('close', e);
}

function handleClick(e: MouseEvent) {
  emit('click', e);
}
</script>

<style lang="scss" scoped>
@import '../../theme/tag.scss';
</style>