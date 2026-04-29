<script lang="ts" setup>
import { inject, computed } from 'vue';

interface OptionProps {
  value?: string | number;
  label?: string;
  disabled?: boolean;
}

const props = withDefaults(defineProps<OptionProps>(), {
  disabled: false,
});

interface SelectState {
  modelValue: string | number;
  disabled?: boolean;
  setChange?: (val: string | number) => void;
}

const parentInject = inject<SelectState | null>('select', null);

const isActive = computed(() => parentInject?.modelValue === props.value);
const isDisabled = computed(() => props.disabled || !!(parentInject?.disabled));
</script>

<template>
  <div
    class="sw-option"
    :class="{
      'sw-option--active': isActive,
      'sw-option--disabled': isDisabled,
    }"
  >
    {{ label || value }}
  </div>
</template>

<style lang="scss" scoped>
@import '../../theme/option.scss';
</style>
