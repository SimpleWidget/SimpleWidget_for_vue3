<script lang="ts" setup>
import { computed } from 'vue';

interface DialogProps {
  visible: boolean;
  title?: string;
  width?: string | number;
  fullscreen?: boolean;
  showMask?: boolean;
  maskClose?: boolean;
  appendToBody?: boolean;
  showHeader?: boolean;
  showCloseIcon?: boolean;
}

const props = withDefaults(defineProps<DialogProps>(), {
  visible: false,
  showMask: true,
  maskClose: true,
  appendToBody: false,
  showHeader: true,
  showCloseIcon: true,
  fullscreen: false,
});

const emit = defineEmits<{
  (e: 'update:visible', value: boolean): void;
  (e: 'close'): void;
}>();

const maskClick = () => {
  if (props.maskClose) {
    emit('update:visible', false);
    emit('close');
  }
};

const closeDialog = () => {
  emit('update:visible', false);
  emit('close');
};

const dialogClasses = computed(() => ({
  'sw-dialog': true,
  'sw-dialog__fullscreen': props.fullscreen,
}));
</script>

<template>
  <teleport to="body" :disabled="!appendToBody">
    <transition name="sw-dialog__trans">
      <div v-show="visible" :class="dialogClasses">
        <div v-if="showMask" class="sw-dialog__mask" @click="maskClick" />
        <div class="sw-dialog__wrapper">
          <transition name="sw-dialog__container-trans">
            <div v-show="visible" class="sw-dialog__container">
              <header v-if="showHeader" class="sw-dialog__header">
                <div class="sw-dialog__header-before">
                  <slot name="headerBefore" />
                </div>
                <div class="sw-dialog__header-center">{{ title }}</div>
                <div class="sw-dialog__header-after">
                  <slot name="headerAfter">
                    <span v-if="showCloseIcon" class="sw-dialog__close" @click="closeDialog">✕</span>
                  </slot>
                </div>
              </header>
              <section v-if="$slots.default" class="sw-dialog__body">
                <slot />
              </section>
              <footer v-if="$slots.footer" class="sw-dialog__footer">
                <slot name="footer" />
              </footer>
            </div>
          </transition>
        </div>
      </div>
    </transition>
  </teleport>
</template>

<style lang="scss" scoped>
@import '../../theme/dialog.scss';
</style>