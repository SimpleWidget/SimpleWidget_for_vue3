<script lang="ts" setup>
import { computed, inject } from 'vue';

interface RadioProps {
  modelValue?: string | number;
  label?: string | number;
  disabled?: boolean;
  border?: boolean;
}

const props = withDefaults(defineProps<RadioProps>(), {
  disabled: false,
});

const emit = defineEmits<{
  (e: 'update:modelValue', value: string | number): void;
  (e: 'change', value: string | number): void;
}>();

const parentInject = inject<{ modelValue: string | number; disabled?: boolean } | null>('radioGroup', null);

const keyword = computed({
  get: () => (parentInject?.modelValue) ?? props.modelValue,
  set: (val) => {
    if (!parentInject) {
      emit('update:modelValue', val as string | number);
      emit('change', val as string | number);
    }
  },
});

const isActive = computed(() => keyword.value === props.label);
const isDisabled = computed(() => props.disabled || !!(parentInject?.disabled));

const classes = computed(() => ({
  'sw-radio--checked': isActive.value,
  'sw-radio--disabled': isDisabled.value,
  'sw-radio--border': props.border,
}));

function handleChange(e: Event) {
  const target = e.target as HTMLInputElement;
  if (target.checked) {
    emit('update:modelValue', props.label as string | number);
    emit('change', props.label as string | number);
  }
}
</script>

<template>
  <label class="sw-radio" :class="classes">
    <input
      type="radio"
      class="sw-radio__input"
      :value="label"
      :checked="isActive"
      :disabled="isDisabled"
      @change="handleChange"
    />
    <span class="sw-radio__box" />
    <span class="sw-radio__text">
      <slot />
      <template v-if="!$slots.default">{{ label }}</template>
    </span>
  </label>
</template>

<style lang="scss" scoped>
@import '../../theme/radio.scss';
</style>
