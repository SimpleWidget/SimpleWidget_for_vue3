<script lang="ts" setup>
import { ref, provide, onMounted, computed } from 'vue';

interface StepsProps {
  current?: number;
}

const props = withDefaults(defineProps<StepsProps>(), {
  current: 1,
});

const itemCount = ref(0);
const itemIndexes = ref<Map<number, number>>(new Map());

const registerItem = (instanceId: number) => {
  const index = itemCount.value++;
  itemIndexes.value.set(instanceId, index);
  return index;
};

const getItemIndex = (instanceId: number) => {
  return itemIndexes.value.get(instanceId) ?? 0;
};

provide('steps', {
  current: computed(() => props.current),
  registerItem,
  getItemIndex,
});
</script>

<template>
  <div class="sw-steps">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
@import '../../theme/steps.scss';
</style>