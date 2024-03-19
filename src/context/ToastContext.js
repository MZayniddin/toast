import React from 'react';
import useEscapeKey from '../hooks/useEscapeKey';

export const ToastContext = React.createContext({
  toasts: [],
  addToast: () => {},
  removeToast: () => {},
});

export default function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  const removeToast = React.useCallback(
    (id) => {
      setToasts(toasts.filter((toast) => toast.id !== id));
    },
    [toasts]
  );

  const addToast = React.useCallback(
    ({ message, variant }) => {
      const newToast = {
        id: Math.random(),
        message,
        variant,
      };

      setToasts([...toasts, newToast]);
    },
    [toasts]
  );

  const value = React.useMemo(
    () => ({ toasts, addToast, removeToast }),
    [addToast, removeToast, toasts]
  );

  const handleEscape = React.useCallback(() => {
    setToasts([]);
  }, []);

  useEscapeKey(handleEscape);

  return (
    <ToastContext.Provider value={value}>{children}</ToastContext.Provider>
  );
}

export const useToastContext = () => React.useContext(ToastContext);
