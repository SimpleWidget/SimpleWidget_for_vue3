<script lang="ts" setup>
import { inject, computed, getCurrentInstance } from 'vue';

interface OptionProps {
  value?: string | number;
  label?: string;
  disabled?: boolean;
}

const props = withDefaults(defineProps<OptionProps>(), {
  disabled: false,
});

const instance = getCurrentInstance();
const parentInject = inject<{
  props: { modelValue?: string | number; disabled?: boolean; filterable?: boolean };
  visible: { value: boolean };
  filterText: { value: string };
  selectedLabel: { value: string };
  handleOptionClick: (value: string | number, label: string) => void;
} | null>('select', null);

const isActive = computed(() => parentInject?.props.modelValue === props.value);
const isDisabled = computed(() => props.disabled || !!(parentInject?.props.disabled));

const displayLabel = computed(() => {
  return props.label || props.value?.toString() || '';
});

const isFiltered = computed(() => {
  if (!parentInject?.filterText.value) return true;
  return displayLabel.value.toLowerCase().includes(parentInject.filterText.value.toLowerCase());
});

function handleClick() {
  if (isDisabled.value) return;
  parentInject?.handleOptionClick(props.value ?? '', displayLabel.value);
}
</script>

<template>
  <div
    v-if="isFiltered"
    class="sw-option"
    :class="{
      'sw-option--active': isActive,
      'sw-option--disabled': isDisabled,
    }"
    @click="handleClick"
  >
    <slot>{{ displayLabel }}</slot>
  </div>
</template>

<style lang="scss" scoped>
@import '../../theme/option.scss';
</style>