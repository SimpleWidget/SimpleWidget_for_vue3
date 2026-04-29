<script lang="ts" setup>
import { ref } from 'vue';

interface DropdownProps {
  trigger?: 'hover' | 'click';
}

const props = withDefaults(defineProps<DropdownProps>(), {
  trigger: 'hover',
});

const isShow = ref(false);

const handleMouseEnter = () => {
  if (props.trigger === 'hover') {
    isShow.value = true;
  }
};

const handleMouseLeave = () => {
  if (props.trigger === 'hover') {
    isShow.value = false;
  }
};

const handleClick = () => {
  if (props.trigger === 'click') {
    isShow.value = !isShow.value;
  }
};

const close = () => {
  isShow.value = false;
};
</script>

<template>
  <div
    class="sw-dropdown"
    :class="{ 'sw-dropdown--show': isShow }"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
  >
    <div class="sw-dropdown__trigger" @click="handleClick">
      <slot name="trigger" />
    </div>
    <div v-if="$slots.default" class="sw-dropdown__menu">
      <slot :close="close" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../../theme/dropdown.scss';
</style>