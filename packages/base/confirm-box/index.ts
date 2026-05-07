import { createVNode, createApp, h, ref } from 'vue';
import SConfirmBox from './confirm-box.vue';

SConfirmBox.install = function (app) {
  app.component('SConfirmBox', SConfirmBox);
};

export { SConfirmBox };

// ConfirmBox service for programmatic usage
export function showConfirmBox(options: {
  title?: string;
  content: string;
  confirmText?: string;
  cancelText?: string;
  onConfirm?: () => void | Promise<void>;
  onCancel?: () => void | Promise<void>;
}) {
  const container = document.createElement('div');
  container.style.cssText = 'position: fixed; inset: 0; z-index: 9999;';
  document.body.appendChild(container);

  const show = ref(true);

  const handleClose = () => {
    show.value = false;
    setTimeout(() => {
      container.remove();
    }, 300);
  };

  const handleConfirm = async () => {
    if (options.onConfirm) {
      await options.onConfirm();
    }
    handleClose();
  };

  const handleCancel = async () => {
    if (options.onCancel) {
      await options.onCancel();
    }
    handleClose();
  };

  const vnode = createVNode(SConfirmBox, {
    show: show.value,
    title: options.title,
    content: options.content,
    confirmText: options.confirmText,
    cancelText: options.cancelText,
    onConfirm: handleConfirm,
    onCancel: handleCancel,
    onClose: handleClose,
    'onUpdate:show': (val: boolean) => {
      show.value = val;
      if (!val) handleClose();
    },
  });

  const app = createApp(vnode);
  app.mount(container);

  return container;
}

// Expose to window for dev
if (typeof window !== 'undefined') {
  (window as any).showConfirmBox = showConfirmBox;
}