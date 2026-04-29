<script lang="ts" setup>
import { provide, reactive, watch } from 'vue';

interface RadioGroupProps {
  modelValue?: string | number;
  disabled?: boolean;
}

const props = withDefaults(defineProps<RadioGroupProps>(), {
  modelValue: '',
  disabled: false,
});

const emit = defineEmits<{
  (e: 'update:modelValue', value: string | number): void;
  (e: 'change', value: string | number): void;
}>();

const state = reactive({
  modelValue: props.modelValue,
  disabled: props.disabled,
  setChange: (val: string | number) => {
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

provide('radioGroup', state);
</script>

<template>
  <div class="sw-radio-group">
    <slot />
  </div>
</template>
