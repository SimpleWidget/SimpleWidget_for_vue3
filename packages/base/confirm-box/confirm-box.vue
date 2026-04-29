<script lang="ts" setup>
import { ref } from 'vue';
import { SButton } from '../button';

interface ConfirmBoxProps {
  show?: boolean;
  title?: string;
  content?: string;
  confirmText?: string;
  cancelText?: string;
  onConfirm?: () => void | Promise<void>;
  onCancel?: () => void | Promise<void>;
  onClose?: () => void;
}

const props = withDefaults(defineProps<ConfirmBoxProps>(), {
  show: false,
  confirmText: '确定',
  cancelText: '取消',
});

const emit = defineEmits<{
  (e: 'update:show', value: boolean): void;
}>();

const isLoading = ref(false);

const handleClose = () => {
  emit('update:show', false);
};

const handleConfirm = async () => {
  isLoading.value = true;
  try {
    if (props.onConfirm) {
      await props.onConfirm();
    }
  } finally {
    isLoading.value = false;
    handleClose();
  }
};

const handleCancel = async () => {
  isLoading.value = true;
  try {
    if (props.onCancel) {
      await props.onCancel();
    }
  } finally {
    isLoading.value = false;
    handleClose();
  }
};
</script>

<template>
  <teleport to="body">
    <transition name="sw-confirm-box__trans" appear>
      <div v-if="show" class="sw-confirm-box">
        <div class="sw-confirm-box__mask" />
        <div class="sw-confirm-box__container">
          <div class="sw-confirm-box__header">
            <div class="sw-confirm-box__title">{{ title }}</div>
            <span
              class="sw-confirm-box__close"
              :style="{ opacity: isLoading ? 0.5 : 1 }"
              @click="handleClose"
            >✕</span>
          </div>
          <div class="sw-confirm-box__body">{{ content }}</div>
          <div class="sw-confirm-box__footer">
            <SButton :disabled="isLoading" @click="handleCancel">
              {{ cancelText }}
            </SButton>
            <SButton type="primary" :loading="isLoading" @click="handleConfirm">
              {{ confirmText }}
            </SButton>
          </div>
        </div>
      </div>
    </transition>
  </teleport>
</template>

<style lang="scss" scoped>
@import '../../theme/confirm-box.scss';

.sw-confirm-box__close {
  cursor: pointer;
  opacity: 0.7;
  &:hover {
    opacity: 1;
  }
}
</style>