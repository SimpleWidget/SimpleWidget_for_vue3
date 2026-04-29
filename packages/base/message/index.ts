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

  const typeColors: Record<string, string> = {
    default: '#f0f0f0',
    primary: '#2d5af1',
    success: '#52b35e',
    danger: '#ff0200',
    warning: '#fcc202',
  };

  const textColors: Record<string, string> = {
    default: '#333',
    primary: '#fff',
    success: '#fff',
    danger: '#fff',
    warning: '#333',
  };

  const type = options.type || 'default';
  const placement = options.placement || 'top';

  let positionStyle = '';
  if (placement === 'top') {
    positionStyle = 'top: 20px; left: 50%; transform: translateX(-50%);';
  } else if (placement === 'top-left') {
    positionStyle = 'top: 20px; left: 20px;';
  } else if (placement === 'top-right') {
    positionStyle = 'top: 20px; right: 20px;';
  } else if (placement === 'bottom') {
    positionStyle = 'bottom: 20px; left: 50%; transform: translateX(-50%);';
  } else if (placement === 'bottom-left') {
    positionStyle = 'bottom: 20px; left: 20px;';
  } else if (placement === 'bottom-right') {
    positionStyle = 'bottom: 20px; right: 20px;';
  }

  const div = document.createElement('div');
  div.style.cssText = `position: fixed; ${positionStyle}; z-index: 9999;`;
  messageContainer.appendChild(div);

  div.innerHTML = `
    <div style="
      padding: 10px 18px;
      font-size: 14px;
      background: ${typeColors[type]};
      color: ${textColors[type]};
      border-radius: ${options.round ? '20px' : '4px'};
      box-shadow: 0 4px 10px rgba(0,0,0,0.2);
      display: flex;
      align-items: center;
      gap: 10px;
      max-width: 500px;
      transition: all 0.4s ease-out;
    ">
      <span>${options.message}</span>
      ${options.close ? '<span onclick="this.parentElement.parentElement.remove()" style="cursor:pointer;opacity:0.7">✕</span>' : ''}
    </div>
  `;

  if (options.duration && options.duration > 0) {
    setTimeout(() => {
      div.remove();
    }, options.duration);
  }
}

// Expose to window for dev
if (typeof window !== 'undefined') {
  (window as any).showMessage = showMessage;
}