<script lang="ts" setup>
interface DropdownItemProps {
  disabled?: boolean;
}

withDefaults(defineProps<DropdownItemProps>(), {
  disabled: false,
});

const emit = defineEmits<{
  (e: 'click'): void;
}>();

const handleClick = () => {
  emit('click');
};
</script>

<template>
  <div
    :class="['sw-dropdown__item', { 'sw-dropdown__item--disabled': disabled }]"
    @click="!disabled && handleClick()"
  >
    <slot />
  </div>
</template>