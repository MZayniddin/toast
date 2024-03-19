import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';
import { useToastContext } from '../../context/ToastContext';

function ToastShelf() {
  const { toasts, removeToast } = useToastContext();

  return (
    <ol
      className={styles.wrapper}
      role="region"
      aria-live="polite"
      aria-label="Notification"
    >
      {toasts.map((toast) => (
        <li key={toast.id} className={styles.toastWrapper}>
          <Toast
            onClose={() => removeToast(toast.id)}
            message={toast.message}
            variant={toast.variant}
          />
        </li>
      ))}
    </ol>
  );
}

export default React.memo(ToastShelf);
