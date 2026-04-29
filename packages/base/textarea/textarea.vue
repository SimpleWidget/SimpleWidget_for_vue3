<script lang="ts" setup>
import { computed } from 'vue';

interface TextareaProps {
  modelValue?: string;
  placeholder?: string;
  disabled?: boolean;
  rows?: number;
  maxlength?: number;
  showCount?: boolean;
}

const props = withDefaults(defineProps<TextareaProps>(), {
  modelValue: '',
  placeholder: '',
  disabled: false,
  rows: 3,
  showCount: false,
});

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void;
  (e: 'focus', event: FocusEvent): void;
  (e: 'blur', event: FocusEvent): void;
}>();

const classes = computed(() => ({
  'sw-textarea--disabled': props.disabled,
}));

function handleInput(e: Event) {
  const target = e.target as HTMLTextAreaElement;
  emit('update:modelValue', target.value);
}

function handleFocus(e: FocusEvent) {
  emit('focus', e);
}

function handleBlur(e: FocusEvent) {
  emit('blur', e);
}
</script>

<template>
  <div class="sw-textarea" :class="classes">
    <textarea
      class="sw-textarea__inner"
      :value="modelValue"
      :placeholder="placeholder"
      :disabled="disabled"
      :rows="rows"
      :maxlength="maxlength"
      @input="handleInput"
      @focus="handleFocus"
      @blur="handleBlur"
    />
    <span v-if="showCount && maxlength" class="sw-textarea__count">
      {{ modelValue.length }} / {{ maxlength }}
    </span>
  </div>
</template>

<style lang="scss" scoped>
@import '../../theme/textarea.scss';
</style>
