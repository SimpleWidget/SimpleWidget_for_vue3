<script lang="ts" setup>
import { ref, provide, reactive, watch, computed, onMounted, onBeforeUnmount, useSlots } from 'vue';

interface SelectProps {
  modelValue?: string | number;
  placeholder?: string;
  disabled?: boolean;
  clearable?: boolean;
  filterable?: boolean;
  size?: 'large' | 'middle' | 'small' | 'mini';
}

const props = withDefaults(defineProps<SelectProps>(), {
  modelValue: '',
  placeholder: '请选择',
  disabled: false,
  clearable: false,
  filterable: false,
  size: 'middle',
});

const emit = defineEmits<{
  (e: 'update:modelValue', value: string | number): void;
  (e: 'change', value: string | number): void;
  (e: 'focus'): void;
  (e: 'blur'): void;
  (e: 'clear'): void;
  (e: 'visibleChange', visible: boolean): void;
}>();

const visible = ref(false);
const filterText = ref('');
const selectRef = ref<HTMLElement | null>(null);

interface SelectProvide {
  props: SelectProps;
  visible: typeof visible;
  filterText: typeof filterText;
  selectedLabel: typeof selectedLabel;
  handleOptionClick: (value: string | number, label: string) => void;
}

const selectedLabel = ref('');

const handleOptionClick = (value: string | number, label: string) => {
  emit('update:modelValue', value);
  emit('change', value);
  selectedLabel.value = label;
  visible.value = false;
  filterText.value = '';
};

provide<SelectProvide>('select', {
  props,
  visible,
  filterText,
  selectedLabel,
  handleOptionClick,
});

const showClear = computed(() => props.clearable && props.modelValue && !props.disabled);

function toggle() {
  if (props.disabled) return;
  visible.value = !visible.value;
  emit('visibleChange', visible.value);
}

function handleClear(e: Event) {
  e.stopPropagation();
  emit('update:modelValue', '');
  emit('clear');
  selectedLabel.value = '';
}

function handleClickOutside(e: MouseEvent) {
  if (selectRef.value && !selectRef.value.contains(e.target as Node)) {
    visible.value = false;
    emit('visibleChange', false);
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside);
});

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside);
});

const displayValue = computed(() => {
  if (filterText.value) return filterText.value;
  return selectedLabel.value || props.modelValue || '';
});
</script>

<template>
  <div ref="selectRef" class="sw-select" :class="[`sw-select--${size}`, { 'sw-select--disabled': disabled, 'sw-select--open': visible }]">
    <div class="sw-select__wrapper" @click="toggle">
      <span class="sw-select__value">
        <slot v-if="$slots.prefix" name="prefix" />
        <span v-else class="sw-select__placeholder" :class="{ 'sw-select__placeholder--hidden': selectedLabel || props.modelValue }">
          {{ placeholder }}
        </span>
        <span v-if="selectedLabel" class="sw-select__label">{{ selectedLabel }}</span>
      </span>
      <span class="sw-select__suffix">
        <span v-if="showClear" class="sw-select__clear" @click="handleClear">
          <i class="sw-icon sw-icon-circle-close" />
        </span>
        <span v-else class="sw-select__arrow" :class="{ 'sw-select__arrow--open': visible }">
          <i class="sw-icon sw-icon-arrow-down" />
        </span>
      </span>
    </div>
    <transition name="sw-select">
      <div v-if="visible" class="sw-select__dropdown">
        <slot />
      </div>
    </transition>
  </div>
</template>

<style lang="scss" scoped>
@import '../../theme/select.scss';
</style>