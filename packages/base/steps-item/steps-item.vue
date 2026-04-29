<script lang="ts" setup>
import { inject, computed } from 'vue';

interface StepsItemProps {
  title: string;
  description?: string;
  status?: 'wait' | 'active' | 'finish' | 'error';
}

const props = withDefaults(defineProps<StepsItemProps>(), {
  status: 'wait',
});

const current = inject<{ value: number }>('current', { value: 1 });

const index = computed(() => {
  // Get the index from parent's slot
  return 0;
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