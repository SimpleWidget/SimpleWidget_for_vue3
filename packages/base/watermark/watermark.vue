<script lang="ts" setup>
import { ref, onMounted } from 'vue';

interface WatermarkProps {
  text?: string;
  gap?: number;
}

const props = withDefaults(defineProps<WatermarkProps>(), {
  text: 'watermark',
  gap: 20,
});

const containerRef = ref<HTMLDivElement | null>(null);

onMounted(() => {
  if (containerRef.value) {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (ctx) {
      canvas.width = 200;
      canvas.height = 100;
      ctx.font = '14px Arial';
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.rotate(-15 * Math.PI / 180);
      ctx.fillText(props.text, 20, 50);
      containerRef.value.style.backgroundImage = `url(${canvas.toDataURL()})`;
      containerRef.value.style.backgroundRepeat = 'repeat';
      containerRef.value.style.backgroundPosition = '0 0';
    }
  }
});
</script>

<template>
  <div ref="containerRef" class="sw-watermark">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.sw-watermark {
  width: 100%;
  min-height: 200px;
}
</style>