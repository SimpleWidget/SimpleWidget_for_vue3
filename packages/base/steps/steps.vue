<script lang="ts" setup>
import { computed, provide } from 'vue';

interface StepsProps {
  current?: number;
}

const props = withDefaults(defineProps<StepsProps>(), {
  current: 1,
});

provide('current', computed(() => props.current));
</script>

<template>
  <div class="sw-steps">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
@import '../../theme/steps.scss';
</style>