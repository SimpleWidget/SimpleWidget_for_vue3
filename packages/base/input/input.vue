<template>
  <input
    class="sw-input"
    :class="classes"
    :type="type"
    :placeholder="placeholder"
    :disabled="disabled"
    :value="modelValue"
    @input="handleInput"
    @focus="handleFocus"
    @blur="handleBlur"
  />
</template>

<script lang="ts" setup>
import { computed, toRefs } from 'vue';

type InputSize = 'medium' | 'large' | 'small' | 'mini';

interface InputProps {
  type?: string;
  modelValue?: string;
  placeholder?: string;
  disabled?: boolean;
  size?: InputSize;
}

const props = withDefaults(defineProps<InputProps>(), {
  type: 'text',
  modelValue: '',
  placeholder: '',
  disabled: false,
});

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void;
  (e: 'focus', event: FocusEvent): void;
  (e: 'blur', event: FocusEvent): void;
}>();

const { disabled, size } = toRefs(props);

const classes = computed(() => [
  size.value ? `sw-input-${size.value}` : '',
  { 'sw-input-disabled': disabled.value },
]);

function handleInput(event: Event) {
  const target = event.target as HTMLInputElement;
  emit('update:modelValue', target.value);
}

function handleFocus(event: FocusEvent) {
  emit('focus', event);
}

function handleBlur(event: FocusEvent) {
  emit('blur', event);
}
</script>

<style lang="scss" scoped>
@import '../../theme/input.scss';
</style>
