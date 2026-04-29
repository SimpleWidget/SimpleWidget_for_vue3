<template>
  <span class="sw-tag" :class="classes">
    <slot />
  </span>
</template>

<script lang="ts" setup>
import { computed } from 'vue';

type TagType = 'primary' | 'success' | 'warning' | 'danger' | 'info';
type TagSize = 'medium' | 'large' | 'small' | 'mini';

interface TagProps {
  type?: TagType;
  size?: TagSize;
}

const props = withDefaults(defineProps<TagProps>(), {
  type: 'primary',
  size: 'medium',
});

const classes = computed(() => [
  props.type ? `sw-tag-${props.type}` : '',
  props.size ? `sw-tag-${props.size}` : '',
]);
</script>

<style lang="scss" scoped>
@import '../../theme/tag.scss';
</style>
