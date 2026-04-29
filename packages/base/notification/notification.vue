<script lang="ts" setup>
import { computed, ref, onMounted, onBeforeUnmount } from 'vue';

interface NotificationProps {
  title?: string;
  message?: string;
  type?: 'default' | 'primary' | 'success' | 'danger' | 'warning';
  close?: boolean;
  duration?: number;
  round?: boolean;
  placement?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
}

const props = withDefaults(defineProps<NotificationProps>(), {
  type: 'default',
  close: false,
  duration: 2500,
  round: false,
  placement: 'top-right',
});

const emit = defineEmits<{
  (e: 'close'): void;
}>();

const visible = ref(true);
let timer: ReturnType<typeof setTimeout> | null = null;

const startTimer = () => {
  if (props.duration > 0) {
    timer = setTimeout(() => {
      visible.value = false;
      emit('close');
    }, props.duration);
  }
};

const clearTimer = () => {
  if (timer) {
    clearTimeout(timer);
    timer = null;
  }
};

onMounted(() => {
  startTimer();
});

onBeforeUnmount(() => {
  clearTimer();
});

const handleClose = () => {
  visible.value = false;
  emit('close');
};

const isRight = computed(() => props.placement?.includes('right'));

const classes = computed(() => ({
  'sw-notification': true,
  [`sw-notification__${props.type}`]: true,
  [`sw-notification__${props.placement}`]: true,
  'sw-notification__round': props.round,
}));
</script>

<template>
  <transition
    mode="out-in"
    appear
    :name="`sw-notification-fade${isRight ? '-right' : '-left'}`"
  >
    <div
      v-show="visible"
      :class="classes"
      @mouseenter="clearTimer"
      @mouseleave="startTimer"
    >
      <div class="sw-notification__content">
        <h3 v-if="title" class="sw-notification__title">{{ title }}</h3>
        <div class="sw-notification__message">{{ message }}</div>
      </div>
      <span v-if="close" class="sw-notification__close" @click="handleClose">✕</span>
    </div>
  </transition>
</template>

<style lang="scss" scoped>
@import '../../theme/notification.scss';
</style>