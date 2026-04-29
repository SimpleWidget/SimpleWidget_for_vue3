<script lang="ts" setup>
import { computed, ref, onMounted, onBeforeUnmount } from 'vue';

interface MessageProps {
  message?: string | object;
  type?: 'default' | 'primary' | 'success' | 'danger' | 'warning';
  close?: boolean;
  duration?: number;
  round?: boolean;
  placement?: 'top' | 'top-left' | 'top-right' | 'bottom' | 'bottom-left' | 'bottom-right';
}

const props = withDefaults(defineProps<MessageProps>(), {
  type: 'default',
  close: false,
  duration: 2500,
  round: false,
  placement: 'top',
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

const classes = computed(() => ({
  'sw-message': true,
  [`sw-message__${props.type}`]: true,
  [`sw-message__${props.placement}`]: true,
  'sw-message__round': props.round,
}));
</script>

<template>
  <transition
    mode="out-in"
    appear
    :name="'sw-message-fade-' + (placement?.includes('bottom') ? 'bottom' : 'top')"
  >
    <div
      v-show="visible"
      :class="classes"
      @mouseenter="clearTimer"
      @mouseleave="startTimer"
    >
      <div class="sw-message__text">{{ message }}</div>
      <span v-if="close" class="sw-message__close" @click="handleClose">✕</span>
    </div>
  </transition>
</template>

<style lang="scss" scoped>
@import '../../theme/message.scss';
</style>