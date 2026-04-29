<script lang="ts" setup>
import { computed } from 'vue';

interface SwitchProps {
  modelValue?: boolean;
  disabled?: boolean;
  activeColor?: string;
  inactiveColor?: string;
}

const props = withDefaults(defineProps<SwitchProps>(), {
  modelValue: false,
  disabled: false,
});

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void;
  (e: 'change', value: boolean): void;
}>();

const classes = computed(() => ({
  'sw-switch--checked': props.modelValue,
  'sw-switch--disabled': props.disabled,
}));

const styles = computed(() => {
  const style: Record<string, string> = {};
  if (props.modelValue && props.activeColor) {
    style['--sw-switch-active-color'] = props.activeColor;
  }
  if (!props.modelValue && props.inactiveColor) {
    style['--sw-switch-inactive-color'] = props.inactiveColor;
  }
  return style;
});

function toggle() {
  if (props.disabled) return;
  const val = !props.modelValue;
  emit('update:modelValue', val);
  emit('change', val);
}
</script>

<template>
  <div
    class="sw-switch"
    :class="classes"
    :style="styles"
    @click="toggle"
  >
    <span class="sw-switch__core" />
  </div>
</template>

<style lang="scss" scoped>
@import '../../theme/switch.scss';
</style>
