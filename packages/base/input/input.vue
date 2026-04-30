<template>
  <div class="sw-input" :class="classList" :style="style">
    <div class="sw-input__wrapper">
      <!-- 前缀插槽 -->
      <slot name="before" />

      <!-- 前缀图标 -->
      <span v-if="icon" class="sw-input__icon sw-icon" :class="icon" />

      <!-- 输入框 -->
      <input
        v-model="modelValue"
        class="sw-input__inner"
        :type="inputType"
        :disabled="disabled"
        :readonly="readonly"
        :autofocus="autofocus"
        :name="name"
        :placeholder="placeholder"
        :maxlength="maxLength"
        :max="max"
        :min="min"
        autocomplete="off"
        @input="handleInput"
        @change="handleChange"
        @blur="handleBlur"
        @focus="handleFocus"
        @keyup.enter="handleEnter"
      />

      <!-- 清除按钮 -->
      <span
        v-if="clear && modelValue"
        class="sw-input__clear-btn sw-icon sw-icon-close"
        @click="handleClear"
      />

      <!-- 密码可见切换 -->
      <span
        v-if="showPassword"
        class="sw-input__password-btn sw-icon"
        :class="showPass ? 'sw-icon-eye-outline' : 'sw-icon-eye-off-outline'"
        @click="togglePassword"
      />

      <!-- 后缀插槽 -->
      <slot name="after" />
    </div>

    <!-- 搜索按钮 -->
    <div v-if="search" class="sw-input__search" @click="handleSearch">
      <slot name="searchBtn">
        <button class="sw-input__search-btn sw-button sw-button-primary sw-button-middle">
          {{ searchText }}
        </button>
      </slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, watchEffect } from 'vue';

type InputSize = 'large' | 'middle' | 'small' | 'mini';
type InputType = 'text' | 'password' | 'number';

interface InputProps {
  modelValue?: string | number;
  type?: InputType;
  size?: InputSize;
  disabled?: boolean;
  readonly?: boolean;
  autofocus?: boolean;
  name?: string;
  placeholder?: string;
  clear?: boolean;
  showPassword?: boolean;
  search?: boolean;
  maxLength?: number;
  max?: number;
  min?: number;
  icon?: string;
  width?: string | number;
  height?: string | number;
  onInput?: (val: string | number) => void;
  onChange?: (val: string | number) => void;
  onFocus?: (e: FocusEvent) => void;
  onBlur?: (e: FocusEvent) => void;
  onEnter?: (e: KeyboardEvent) => void;
  onSearch?: (val: string | number) => void;
  onClear?: () => void;
}

const props = withDefaults(defineProps<InputProps>(), {
  modelValue: '',
  type: 'text',
  size: 'middle',
  disabled: false,
  readonly: false,
  autofocus: false,
  name: 'sw-input',
  placeholder: '',
  clear: false,
  showPassword: false,
  search: false,
  width: undefined,
  height: undefined,
});

const emit = defineEmits<{
  (e: 'update:modelValue', value: string | number): void;
  (e: 'input', value: string | number): void;
  (e: 'change', value: string | number): void;
  (e: 'focus', event: FocusEvent): void;
  (e: 'blur', event: FocusEvent): void;
  (e: 'enter', event: KeyboardEvent): void;
  (e: 'search', value: string | number): void;
  (e: 'clear'): void;
}>();

const showPass = ref(false);
const inputType = ref(props.type);

watchEffect(() => {
  if (props.type === 'password' && showPass.value) {
    inputType.value = 'text';
  } else {
    inputType.value = props.type;
  }
});

const classList = computed(() => [
  `sw-input-${props.size}`,
  {
    'sw-input-disabled': props.disabled,
    'sw-input-search': props.search,
  },
]);

const style = computed(() => {
  const s: Record<string, string> = {};
  if (props.width) s.width = typeof props.width === 'number' ? `${props.width}px` : props.width;
  if (props.height) s.height = typeof props.height === 'number' ? `${props.height}px` : props.height;
  return s;
});

const searchText = '搜索';

function handleInput(e: Event) {
  const target = e.target as HTMLInputElement;
  emit('update:modelValue', target.value);
  emit('input', target.value);
}

function handleChange(e: Event) {
  const target = e.target as HTMLInputElement;
  emit('change', target.value);
}

function handleFocus(e: FocusEvent) {
  emit('focus', e);
}

function handleBlur(e: FocusEvent) {
  emit('blur', e);
}

function handleEnter(e: KeyboardEvent) {
  emit('enter', e);
  if (props.search) {
    handleSearch();
  }
}

function handleSearch() {
  emit('search', props.modelValue);
}

function handleClear() {
  emit('update:modelValue', '');
  emit('clear');
}

function togglePassword() {
  showPass.value = !showPass.value;
}
</script>

<style lang="scss" scoped>
@import '../../theme/input.scss';
</style>