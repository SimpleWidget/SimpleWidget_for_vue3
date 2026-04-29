<script lang="ts" setup>
import { provide, reactive, toRefs } from 'vue';

interface FormProps {
  model?: Record<string, any>;
  labelWidth?: string | number;
  labelPosition?: 'left' | 'top';
}

const props = withDefaults(defineProps<FormProps>(), {
  labelPosition: 'left',
});

const emit = defineEmits<{
  (e: 'submit', data: any): void;
}>();

const formData = reactive(props.model || {});

provide('form', {
  model: formData,
  labelWidth: props.labelWidth,
  labelPosition: props.labelPosition,
});

const handleSubmit = (evt: Event) => {
  evt.preventDefault();
  emit('submit', formData);
};

defineExpose({ submit: handleSubmit });
</script>

<template>
  <form class="sw-form" :class="[`sw-form--label-${labelPosition}`]" @submit="handleSubmit">
    <slot />
  </form>
</template>

<style lang="scss" scoped>
@import '../../theme/form.scss';
</style>