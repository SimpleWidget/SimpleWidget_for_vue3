import { createVNode, createApp, ref } from 'vue';
import SMessage from './message.vue';

SMessage.install = function (app) {
  app.component('SMessage', SMessage);
};

export { SMessage };

// Message service for programmatic usage
let messageContainer: HTMLElement | null = null;

export function showMessage(options: {
  message: string;
  type?: 'default' | 'primary' | 'success' | 'danger' | 'warning';
  duration?: number;
  close?: boolean;
  round?: boolean;
  placement?: 'top' | 'top-left' | 'top-right' | 'bottom' | 'bottom-left' | 'bottom-right';
}) {
  if (!messageContainer) {
    messageContainer = document.createElement('div');
    messageContainer.className = 'sw-message-container';
    document.body.appendChild(messageContainer);
  }

  const container = document.createElement('div');
  container.style.cssText = `position: fixed; z-index: 9999;`;

  const placement = options.placement || 'top';
  if (placement === 'top') {
    container.style.top = '20px';
    container.style.left = '50%';
    container.style.transform = 'translateX(-50%)';
  } else if (placement === 'top-left') {
    container.style.top = '20px';
    container.style.left = '20px';
  } else if (placement === 'top-right') {
    container.style.top = '20px';
    container.style.right = '20px';
  } else if (placement === 'bottom') {
    container.style.bottom = '20px';
    container.style.left = '50%';
    container.style.transform = 'translateX(-50%)';
  } else if (placement === 'bottom-left') {
    container.style.bottom = '20px';
    container.style.left = '20px';
  } else if (placement === 'bottom-right') {
    container.style.bottom = '20px';
    container.style.right = '20px';
  }

  messageContainer.appendChild(container);

  const show = ref(true);

  const handleClose = () => {
    show.value = false;
    setTimeout(() => {
      container.remove();
    }, 400);
  };

  const vnode = createVNode(SMessage, {
    message: options.message,
    type: options.type,
    duration: options.duration,
    close: options.close,
    round: options.round,
    placement: options.placement,
    onClose: handleClose,
  });

  const app = createApp(vnode);
  app.mount(container);

  if (options.duration && options.duration > 0) {
    setTimeout(() => {
      handleClose();
    }, options.duration);
  }
}

// Expose to window for dev
if (typeof window !== 'undefined') {
  (window as any).showMessage = showMessage;
}