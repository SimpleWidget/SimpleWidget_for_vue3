<script lang="ts" setup>
import { inject, computed } from 'vue';

interface TabItemProps {
  label: string;
  name?: string | number;
}

const props = withDefaults(defineProps<TabItemProps>(), {
  name: 0,
});

const activeName = inject<{ value: string | number }>('activeName');
const changeTab = inject<(name: string | number) => void>('changeTab');

const isActive = computed(() => activeName?.value === props.name);

const handleClick = () => {
  if (changeTab) {
    changeTab(props.name);
  }
};
</script>

<template>
  <div
    :class="['sw-tabs__nav-item', { 'sw-tabs__nav-item--active': isActive }]"
    @click="handleClick"
  >
    {{ label }}
  </div>
  <div v-if="isActive" class="sw-tabs__panel sw-tabs__panel--active">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
@import '../../theme/tabs.scss';
</style>