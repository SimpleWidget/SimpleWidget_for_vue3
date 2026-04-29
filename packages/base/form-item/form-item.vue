<script lang="ts" setup>
import { inject, computed } from 'vue';

interface FormItemProps {
  label?: string;
  prop?: string;
}

const props = defineProps<FormItemProps>();

const form = inject<{
  model: Record<string, any>;
  labelWidth?: string | number;
  labelPosition?: 'left' | 'top';
}>('form', { model: {} });

const labelWidth = computed(() => {
  if (form.labelWidth) {
    return typeof form.labelWidth === 'number' ? `${form.labelWidth}px` : form.labelWidth;
  }
  return '80px';
});
</script>

<template>
  <div class="sw-form__item">
    <label v-if="label" class="sw-form__item-label" :style="{ width: labelWidth }">
      {{ label }}
    </label>
    <div class="sw-form__item-control">
      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../../theme/form.scss';
</style>