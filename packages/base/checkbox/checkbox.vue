<script lang="ts" setup>
import { computed, inject, reactive } from 'vue';

interface CheckboxProps {
  modelValue?: boolean | string[];
  label?: string | number | boolean;
  disabled?: boolean;
  border?: boolean;
  showLabel?: boolean;
}

const props = withDefaults(defineProps<CheckboxProps>(), {
  modelValue: false,
  showLabel: true,
});

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean | string[]): void;
  (e: 'change', value: boolean | string[]): void;
}>();

/** 获取父组件注入 */
const parentInject = inject<{ modelValue: boolean | string[]; disabled?: boolean } | null>('checkboxGroup', null);

/** 当前绑定的值 */
const keyword = computed({
  get: (): boolean | string[] => {
    return (parentInject?.modelValue) || props.modelValue;
  },
  set: (val: boolean | string[]): void => {
    if (!parentInject) {
      emit('update:modelValue', val);
      emit('change', val);
    }
  },
});

/** 是否被选中 */
const isActive = computed((): boolean => {
  const value = keyword.value;
  if (Array.isArray(value)) {
    return value.includes(props.label as never);
  }
  return Boolean(value);
});

/** 判断是否被禁用 */
const isDisabled = computed((): boolean => props.disabled || !!(parentInject?.disabled));

const classes = computed(() => [
  {
    'sw-checkbox--checked': isActive.value,
    'sw-checkbox--disabled': isDisabled.value,
    'sw-checkbox--border': props.border,
  },
]);

function handleChange(e: Event) {
  const target = e.target as HTMLInputElement;
  if (parentInject) {
    const arr = [...(Array.isArray(keyword.value) ? keyword.value : [])];
    if (target.checked) {
      arr.push(props.label);
    } else {
      const idx = arr.indexOf(props.label as never);
      if (idx > -1) arr.splice(idx, 1);
    }
    emit('update:modelValue', arr);
    emit('change', arr);
  } else {
    emit('update:modelValue', target.checked);
    emit('change', target.checked);
  }
}
</script>

<template>
  <label class="sw-checkbox" :class="classes">
    <input
      type="checkbox"
      class="sw-checkbox__input"
      :value="label"
      :checked="isActive"
      :disabled="isDisabled"
      @change="handleChange"
    />
    <span class="sw-checkbox__box" />
    <span class="sw-checkbox__text">
      <slot />
      <template v-if="!$slots.default && showLabel">{{ label }}</template>
    </span>
  </label>
</template>

<style lang="scss" scoped>
@import '../../theme/checkbox.scss';
</style>
