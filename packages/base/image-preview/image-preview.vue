<script lang="ts" setup>
import { ref } from 'vue';

interface ImagePreviewProps {
  src?: string;
}

const props = defineProps<ImagePreviewProps>();

const isShow = ref(false);

const open = () => {
  isShow.value = true;
};

const close = () => {
  isShow.value = false;
};
</script>

<template>
  <div class="sw-image-preview">
    <img v-if="src" :src="src" alt="" @click="open" style="cursor: pointer;" />
    <teleport to="body">
      <div v-if="isShow" class="sw-image-preview__mask" @click="close">
        <div class="sw-image-preview__content">
          <img :src="src" alt="" @click.stop />
          <span class="sw-image-preview__close" @click="close">✕</span>
        </div>
      </div>
    </teleport>
  </div>
</template>

<style lang="scss" scoped>
.sw-image-preview {
  &__mask {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.9);
    z-index: 9999;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__content {
    position: relative;
    max-width: 90vw;
    max-height: 90vh;

    img {
      max-width: 100%;
      max-height: 100%;
    }
  }

  &__close {
    position: absolute;
    top: -40px;
    right: 0;
    width: 32px;
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    cursor: pointer;
    font-size: 24px;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 50%;

    &:hover {
      background: rgba(255, 255, 255, 0.3);
    }
  }
}
</style>