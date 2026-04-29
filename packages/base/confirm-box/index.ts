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

  let confirmBoxEl: HTMLElement | null = null;

  const handleClose = () => {
    if (confirmBoxEl) {
      confirmBoxEl.remove();
      confirmBoxEl = null;
    }
    container.remove();
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

  confirmBoxEl = document.createElement('div');
  confirmBoxEl.innerHTML = `
    <div style="
      position: fixed;
      inset: 0;
      background: rgba(0,0,0,0.5);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 1000;
    ">
      <div style="
        width: 300px;
        padding: 20px 30px;
        background: #fff;
        border-radius: 2px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.33);
      ">
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <div style="font-size: 16px; color: #333; font-weight: bold;">${options.title || '确认'}</div>
          <span onclick="this.closest('.sw-confirm-box').remove()" style="cursor: pointer; opacity: 0.7;">✕</span>
        </div>
        <div style="margin-top: 24px; margin-bottom: 18px; font-size: 15px; color: #333;">${options.content}</div>
        <div style="display: flex; justify-content: flex-end; gap: 10px;">
          <button id="cancelBtn" style="
            padding: 8px 16px;
            border: 1px solid #dcdfe6;
            background: #fff;
            border-radius: 4px;
            cursor: pointer;
          ">${options.cancelText || '取消'}</button>
          <button id="confirmBtn" style="
            padding: 8px 16px;
            border: none;
            background: #2d5af1;
            color: #fff;
            border-radius: 4px;
            cursor: pointer;
          ">${options.confirmText || '确定'}</button>
        </div>
      </div>
    </div>
  `;

  container.appendChild(confirmBoxEl);

  setTimeout(() => {
    const cancelBtn = confirmBoxEl!.querySelector('#cancelBtn');
    const confirmBtn = confirmBoxEl!.querySelector('#confirmBtn');
    cancelBtn?.addEventListener('click', handleCancel);
    confirmBtn?.addEventListener('click', handleConfirm);
  }, 0);

  return container;
}

// Expose to window for dev
if (typeof window !== 'undefined') {
  (window as any).showConfirmBox = showConfirmBox;
}