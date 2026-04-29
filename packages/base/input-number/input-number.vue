<script lang="ts" setup>
import { computed } from 'vue';

interface InputNumberProps {
  modelValue?: number;
  min?: number;
  max?: number;
  step?: number;
  disabled?: boolean;
  size?: 'large' | 'middle' | 'small' | 'mini';
}

const props = withDefaults(defineProps<InputNumberProps>(), {
  modelValue: 0,
  min: -Infinity,
  max: Infinity,
  step: 1,
  disabled: false,
  size: 'middle',
});

const emit = defineEmits<{
  (e: 'update:modelValue', value: number): void;
  (e: 'change', value: number): void;
}>();

const classes = computed(() => ({
  'sw-input-number--disabled': props.disabled,
  [`sw-input-number--${props.size}`]: true,
}));

function decrease() {
  if (props.disabled) return;
  const newVal = props.modelValue - props.step;
  if (newVal >= props.min) {
    emit('update:modelValue', newVal);
    emit('change', newVal);
  }
}

function increase() {
  if (props.disabled) return;
  const newVal = props.modelValue + props.step;
  if (newVal <= props.max) {
    emit('update:modelValue', newVal);
    emit('change', newVal);
  }
}

function handleInput(e: Event) {
  const target = e.target as HTMLInputElement;
  const val = Number(target.value);
  if (!isNaN(val) && val >= props.min && val <= props.max) {
    emit('update:modelValue', val);
    emit('change', val);
  }
}
</script>

<template>
  <div class="sw-input-number" :class="classes">
    <button class="sw-input-number__decrease" @click="decrease" :disabled="disabled">-</button>
    <input
      class="sw-input-number__input"
      type="number"
      :value="modelValue"
      :disabled="disabled"
      @input="handleInput"
    />
    <button class="sw-input-number__increase" @click="increase" :disabled="disabled">+</button>
  </div>
</template>

<style lang="scss" scoped>
@import '../../theme/input-number.scss';
</style>
