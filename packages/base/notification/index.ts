import { createVNode, createApp, ref } from 'vue';
import SNotification from './notification.vue';

SNotification.install = function (app) {
  app.component('SNotification', SNotification);
};

export { SNotification };

// Notification service for programmatic usage
let notificationContainer: HTMLElement | null = null;

export function showNotification(options: {
  title?: string;
  message: string;
  type?: 'default' | 'primary' | 'success' | 'danger' | 'warning';
  duration?: number;
  close?: boolean;
  round?: boolean;
  placement?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
}) {
  if (!notificationContainer) {
    notificationContainer = document.createElement('div');
    notificationContainer.className = 'sw-notification-container';
    document.body.appendChild(notificationContainer);
  }

  const container = document.createElement('div');
  container.style.cssText = `position: fixed; z-index: 9999;`;

  const placement = options.placement || 'top-right';
  if (placement === 'top-left') {
    container.style.top = '20px';
    container.style.left = '20px';
  } else if (placement === 'top-right') {
    container.style.top = '20px';
    container.style.right = '20px';
  } else if (placement === 'bottom-left') {
    container.style.bottom = '20px';
    container.style.left = '20px';
  } else if (placement === 'bottom-right') {
    container.style.bottom = '20px';
    container.style.right = '20px';
  }

  notificationContainer.appendChild(container);

  const show = ref(true);

  const handleClose = () => {
    show.value = false;
    setTimeout(() => {
      container.remove();
    }, 400);
  };

  const vnode = createVNode(SNotification, {
    title: options.title,
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
  (window as any).showNotification = showNotification;
}