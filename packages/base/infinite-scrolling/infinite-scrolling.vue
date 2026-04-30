<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue';

interface InfiniteScrollingProps {
  distance?: number;
}

const props = withDefaults(defineProps<InfiniteScrollingProps>(), {
  distance: 100,
});

const emit = defineEmits<{
  (e: 'loadMore'): void;
}>();

const containerRef = ref<HTMLDivElement | null>(null);

const handleScroll = () => {
  if (containerRef.value) {
    const { scrollTop, scrollHeight, clientHeight } = containerRef.value;
    if (scrollHeight - scrollTop - clientHeight < props.distance) {
      emit('loadMore');
    }
  }
};

onMounted(() => {
  containerRef.value?.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  containerRef.value?.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <div ref="containerRef" class="sw-infinite-scrolling">
    <slot />
    <div v-if="$slots.loading" class="sw-infinite-scrolling__loading">
      <slot name="loading" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.sw-infinite-scrolling {
  overflow-y: auto;
  height: 300px;

  &__loading {
    padding: 20px;
    text-align: center;
    color: #999;
  }
}
</style>