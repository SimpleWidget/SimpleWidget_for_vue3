<script lang="ts" setup>
interface EmptyProps {
  content?: string;
  imageSize?: string | number;
}

withDefaults(defineProps<EmptyProps>(), {
  imageSize: 60,
});
</script>

<template>
  <div class="sw-empty">
    <div class="sw-empty__wrapper">
      <slot>
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
          <circle cx="30" cy="30" r="25" stroke="#d0d0d0" stroke-width="2" fill="none" />
          <line x1="20" y1="30" x2="40" y2="30" stroke="#d0d0d0" stroke-width="2" />
        </svg>
      </slot>
    </div>
    <p class="sw-empty__content">{{ content || '暂无数据' }}</p>
    <div v-if="$slots.footer" class="sw-empty__footer">
      <slot name="footer" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../../theme/empty.scss';
</style>