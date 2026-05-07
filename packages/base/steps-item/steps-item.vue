<script lang="ts" setup>
import { inject, computed, onMounted, ref } from 'vue';

interface StepsItemProps {
  title: string;
  description?: string;
  status?: 'wait' | 'active' | 'finish' | 'error';
}

const props = withDefaults(defineProps<StepsItemProps>(), {
  status: 'wait',
});

const steps = inject<{
  current: { value: number };
  registerItem: (id: number) => number;
  getItemIndex: (id: number) => number;
}>('steps', { current: { value: 1 }, registerItem: () => 0, getItemIndex: () => 0 });

const instanceId = ref(Math.random());
const index = computed(() => steps.getItemIndex(instanceId.value));

onMounted(() => {
  steps.registerItem(instanceId.value);
});

const status = computed(() => {
  if (props.status === 'active') return 'active';
  if (props.status === 'finish') return 'finish';
  if (props.status === 'error') return 'error';
  return 'wait';
});
</script>

<template>
  <div class="sw-steps__item">
    <div class="sw-steps__dot" :class="[`sw-steps__dot--${status}`]">
      <span v-if="status === 'wait'">{{ index + 1 }}</span>
      <span v-else-if="status === 'finish'">✓</span>
      <span v-else-if="status === 'error'">✕</span>
      <span v-else>{{ index + 1 }}</span>
    </div>
    <div class="sw-steps__content">
      <div class="sw-steps__title">{{ title }}</div>
      <div v-if="description" class="sw-steps__description">{{ description }}</div>
    </div>
    <div v-if="!$slots.default" class="sw-steps__line" :class="[`sw-steps__line--${status}`]" />
    <slot />
  </div>
</template>

<style lang="scss" scoped>
@import '../../theme/steps.scss';
</style>