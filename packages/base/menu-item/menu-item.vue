<script lang="ts" setup>
import { inject, computed } from 'vue';

interface MenuItemProps {
  index?: string;
  disabled?: boolean;
}

const props = withDefaults(defineProps<MenuItemProps>(), {
  index: '',
  disabled: false,
});

const parent = inject<{
  activeIndex: { value: string };
  handleSelect: (index: string) => void;
}>('menu');

const isActive = computed(() => parent?.activeIndex.value === props.index);

const handleClick = () => {
  if (!props.disabled && props.index) {
    parent?.handleSelect(props.index);
  }
};
</script>

<template>
  <div
    class="sw-menu__item"
    :class="{ 'sw-menu__item--active': isActive, 'sw-menu__item--disabled': disabled }"
    @click="handleClick"
  >
    <slot />
  </div>
</template>

<style lang="scss" scoped>
@import '../../theme/menu.scss';
</style>