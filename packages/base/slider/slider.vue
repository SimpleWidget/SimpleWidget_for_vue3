<script lang="ts" setup>
import { computed } from 'vue';

interface SliderProps {
  modelValue?: number;
  min?: number;
  max?: number;
  step?: number;
  disabled?: boolean;
  showInput?: boolean;
}

const props = withDefaults(defineProps<SliderProps>(), {
  modelValue: 0,
  min: 0,
  max: 100,
  step: 1,
  disabled: false,
  showInput: false,
});

const emit = defineEmits<{
  (e: 'update:modelValue', value: number): void;
  (e: 'change', value: number): void;
}>();

const percentage = computed(() => {
  return ((props.modelValue - props.min) / (props.max - props.min)) * 100;
});

const classes = computed(() => ({
  'sw-slider--disabled': props.disabled,
}));

function handleInput(e: Event) {
  const target = e.target as HTMLInputElement;
  const val = Number(target.value);
  emit('update:modelValue', val);
  emit('change', val);
}
</script>

<template>
  <div class="sw-slider" :class="classes">
    <div class="sw-slider__track">
      <div class="sw-slider__fill" :style="{ width: percentage + '%' }" />
      <div class="sw-slider__thumb" :style="{ left: percentage + '%' }" />
    </div>
    <input
      v-if="showInput"
      type="number"
      class="sw-slider__input"
      :value="modelValue"
      :min="min"
      :max="max"
      :step="step"
      :disabled="disabled"
      @input="handleInput"
    />
  </div>
</template>

<style lang="scss" scoped>
@import '../../theme/slider.scss';
</style>
