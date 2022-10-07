<!--
 * @Author: Coan
 * @Date: 2022-10-05 16:27:23
 * @LastEditors: Coan
 * @LastEditTime: 2022-10-07 17:03:50
 * @FilePath: /SimpleWidget_for_vue3/packages/base/button/button.vue
 * @Description:
-->

<template>
  <button
    class="sw-button"
    :class="classes"
    :type="nativeType"
    :disabled="disabled"
  >
    <slot />
  </button>
</template>

<script lang="ts" setup>
import { computed, toRefs, withDefaults } from 'vue';
// 按钮类型
type ButtonType =
  | 'primary'
  | 'success'
  | 'warning'
  | 'danger'
  | 'info'
  | 'text';
type ButtonSize = 'medium' | 'large' | 'small' | 'mini';
type ButtonNativeType = 'button' | 'submit' | 'reset';
interface ButtonProps {
  type?: ButtonType;
  size?: ButtonSize;
  nativeType?: ButtonNativeType;
  // loading?: boolean;
  disabled?: boolean;
}
// withDefaults 使用类型声明时的默认 props 值
const props = withDefaults(defineProps<ButtonProps>(), {
  nativeType: 'button',
});
const { disabled } = toRefs(props);
function useClasses({ props }) {
  return computed(() => {
    return [
      props.type ? `sw-button-${props.type}` : '',
      props.size ? `sw-button-${props.size}` : '',
      {
        'sw-button-disabled': props.disabled,
      },
    ];
  });
}
const classes = useClasses({
  props,
});
</script>

<style lang="scss" scoped>
@import '../../theme/button.scss';
</style>
