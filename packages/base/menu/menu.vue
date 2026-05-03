<script lang="ts" setup>
import { computed, provide } from 'vue';

interface MenuProps {
  mode?: 'horizontal' | 'vertical';
  defaultActive?: string;
}

const props = withDefaults(defineProps<MenuProps>(), {
  mode: 'vertical',
  defaultActive: '',
});

const emit = defineEmits<{
  (e: 'select', index: string): void;
}>();

const activeIndex = computed(() => props.defaultActive);

const handleSelect = (index: string) => {
  emit('select', index);
};

provide('menu', {
  mode: props.mode,
  activeIndex,
  handleSelect,
});
</script>

<template>
  <div class="sw-menu" :class="[`sw-menu--${mode}`]">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
@import '../../theme/menu.scss';
</style>