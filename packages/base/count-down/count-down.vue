<script lang="ts" setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

interface CountDownProps {
  time?: number;
  format?: string;
  autoStart?: boolean;
}

const props = withDefaults(defineProps<CountDownProps>(), {
  time: 0,
  format: 'HH:mm:ss',
  autoStart: true,
});

const emit = defineEmits<{
  (e: 'finish'): void;
  (e: 'change', current: number): void;
}>();

const currentTime = ref(props.time);
let interval: ReturnType<typeof setInterval> | null = null;

const formatTime = (ms: number): string => {
  const totalSeconds = Math.floor(ms / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  let result = props.format;
  result = result.replace('DD', String(days).padStart(2, '0'));
  result = result.replace('HH', String(hours).padStart(2, '0'));
  result = result.replace('mm', String(minutes).padStart(2, '0'));
  result = result.replace('ss', String(seconds).padStart(2, '0'));
  result = result.replace('S', String(Math.floor((ms % 1000) / 100)));

  return result;
};

const start = () => {
  if (interval) return;
  interval = setInterval(() => {
    currentTime.value -= 1000;
    emit('change', currentTime.value);
    if (currentTime.value <= 0) {
      currentTime.value = 0;
      stop();
      emit('finish');
    }
  }, 1000);
};

const stop = () => {
  if (interval) {
    clearInterval(interval);
    interval = null;
  }
};

const reset = (newTime?: number) => {
  stop();
  currentTime.value = newTime ?? props.time;
};

onMounted(() => {
  if (props.autoStart) {
    start();
  }
});

onBeforeUnmount(() => {
  stop();
});

defineExpose({ start, stop, reset });
</script>

<template>
  <div class="sw-count-down">
    <slot>{{ formatTime(currentTime) }}</slot>
  </div>
</template>