<script lang="ts" setup>
import { computed, ref } from 'vue';

interface AlertProps {
  type?: 'default' | 'primary' | 'success' | 'danger' | 'warning' | 'info';
  title?: string;
  close?: boolean;
  simple?: boolean;
  center?: boolean;
  round?: boolean;
  fixed?: boolean;
}

const props = withDefaults(defineProps<AlertProps>(), {
  type: 'default',
  close: false,
  simple: false,
  center: false,
  round: false,
  fixed: false,
});

const isShow = ref(true);

const handleClose = () => {
  isShow.value = false;
};

const classes = computed(() => ({
  'sw-alert': true,
  [`sw-alert__${props.type}`]: true,
  'sw-alert--simple': props.simple,
  'sw-alert--center': props.center,
  'sw-alert--round': props.round,
  'sw-alert--fixed': props.fixed,
}));
</script>

<template>
  <transition name="sw-alert">
    <div v-if="isShow" :class="classes">
      <div class="sw-alert__content">
        <div v-if="title" class="sw-alert__title">{{ title }}</div>
        <div v-if="$slots.default" class="sw-alert__sub-title">
          <slot />
        </div>
      </div>
      <span v-if="close" class="sw-alert__close" @click="handleClose">✕</span>
    </div>
  </transition>
</template>

<style lang="scss" scoped>
@import '../../theme/alert.scss';
</style>