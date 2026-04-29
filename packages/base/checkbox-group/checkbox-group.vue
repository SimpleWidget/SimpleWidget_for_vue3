<script lang="ts" setup>
import { provide, reactive, watch } from 'vue';

interface CheckboxGroupProps {
  modelValue?: string[];
  disabled?: boolean;
}

const props = withDefaults(defineProps<CheckboxGroupProps>(), {
  modelValue: () => [],
  disabled: false,
});

const emit = defineEmits<{
  (e: 'update:modelValue', value: string[]): void;
  (e: 'change', value: string[]): void;
}>();

const state = reactive({
  modelValue: props.modelValue,
  disabled: props.disabled,
  setChange: (val: string[]) => {
    state.modelValue = val;
    emit('update:modelValue', val);
    emit('change', val);
  },
});

watch(() => props.modelValue, (val) => {
  state.modelValue = val;
});

watch(() => props.disabled, (val) => {
  state.disabled = val;
});

provide('checkboxGroup', state);
</script>

<template>
  <div class="sw-checkbox-group">
    <slot />
  </div>
</template>
