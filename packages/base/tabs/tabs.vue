<script lang="ts" setup>
import { ref, provide, computed } from 'vue';

interface TabsProps {
  modelValue?: string | number;
}

const props = withDefaults(defineProps<TabsProps>(), {
  modelValue: 0,
});

const emit = defineEmits<{
  (e: 'update:modelValue', value: string | number): void;
  (e: 'change', value: string | number): void;
}>();

const activeName = ref(props.modelValue);

const changeTab = (name: string | number) => {
  activeName.value = name;
  emit('update:modelValue', name);
  emit('change', name);
};

provide('activeName', activeName);
provide('changeTab', changeTab);
</script>

<template>
  <div class="sw-tabs">
    <div class="sw-tabs__head">
      <slot name="header" />
    </div>
    <div class="sw-tabs__body">
      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../../theme/tabs.scss';
</style>