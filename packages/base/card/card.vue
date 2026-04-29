<script lang="ts" setup>
import { ref } from 'vue';

interface CardProps {
  title?: string;
  round?: boolean;
  padding?: string | number;
  shadow?: 'hover' | 'always';
  close?: boolean;
  titleBold?: boolean;
}

const props = withDefaults(defineProps<CardProps>(), {
  round: false,
  padding: 16,
  close: false,
  titleBold: false,
});

const emit = defineEmits<{
  (e: 'close'): void;
}>();

const isShow = ref(true);

const handleClose = () => {
  isShow.value = false;
  emit('close');
};

const classes = {
  'sw-card': true,
  'sw-card--round': props.round,
  'sw-card--shadow': props.shadow === 'hover',
  'sw-card--shadow-always': props.shadow === 'always',
};
</script>

<template>
  <transition name="sw-card">
    <div v-if="isShow" :class="classes">
      <header v-if="$slots.header || title" class="sw-card__header">
        <span :class="['sw-card__title', { 'sw-card__title-bold': titleBold }]">
          <slot name="header">{{ title }}</slot>
        </span>
        <span v-if="close" class="sw-card__close" @click="handleClose">✕</span>
      </header>
      <main class="sw-card__body" :style="{ padding: typeof padding === 'number' ? `${padding}px` : padding }">
        <slot />
      </main>
    </div>
  </transition>
</template>

<style lang="scss" scoped>
@import '../../theme/card.scss';
</style>