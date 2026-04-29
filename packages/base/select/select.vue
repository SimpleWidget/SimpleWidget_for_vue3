<script lang="ts" setup>
import { ref, provide, reactive, watch, computed } from 'vue';

interface SelectProps {
  modelValue?: string | number;
  placeholder?: string;
  disabled?: boolean;
}

const props = withDefaults(defineProps<SelectProps>(), {
  modelValue: '',
  placeholder: '请选择',
  disabled: false,
});

const emit = defineEmits<{
  (e: 'update:modelValue', value: string | number): void;
  (e: 'change', value: string | number): void;
}>();

const visible = ref(false);
const state = reactive({
  modelValue: props.modelValue,
  disabled: props.disabled,
});

watch(() => props.modelValue, (val) => {
  state.modelValue = val;
});

watch(() => props.disabled, (val) => {
  state.disabled = val;
});

provide('select', state);

function toggle() {
  if (props.disabled) return;
  visible.value = !visible.value;
}
</script>

<template>
  <div class="sw-select" :class="{ 'sw-select--disabled': disabled }">
    <div class="sw-select__trigger" @click="toggle">
      <span class="sw-select__value">{{ state.modelValue || placeholder }}</span>
      <span class="sw-select__arrow" :class="{ 'sw-select__arrow--open': visible }">▼</span>
    </div>
    <div v-if="visible" class="sw-select__dropdown">
      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../../theme/select.scss';
</style>
