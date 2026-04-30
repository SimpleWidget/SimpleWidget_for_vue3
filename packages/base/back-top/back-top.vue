<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue';

interface BackTopProps {
  target?: string;
  visibleHeight?: number;
  top?: number;
}

const props = withDefaults(defineProps<BackTopProps>(), {
  visibleHeight: 200,
  top: 0,
});

const visible = ref(false);

const handleScroll = () => {
  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  visible.value = scrollTop > props.visibleHeight;
};

const handleClick = () => {
  window.scrollTo({ top: props.top, behavior: 'smooth' });
};

onMounted(() => {
  document.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  document.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <transition name="sw-back-top">
    <div v-show="visible" class="sw-back-top" @click="handleClick">
      <slot>↑</slot>
    </div>
  </transition>
</template>

<style lang="scss" scoped>
.sw-back-top {
  position: fixed;
  right: 20px;
  bottom: 20px;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #2d5af1;
  color: #fff;
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  font-size: 18px;
  z-index: 999;

  &:hover {
    background: #1a4ad6;
  }

  &-enter-active,
  &-leave-active {
    transition: all 0.3s ease;
  }

  &-enter-from,
  &-leave-to {
    opacity: 0;
    transform: translateY(20px);
  }
}
</style>