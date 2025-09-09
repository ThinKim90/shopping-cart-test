import { ToastMessage } from '../../types/cart';

interface ToastProps {
  toast: ToastMessage;
  onRemove: (id: string) => void;
}

export const Toast = ({ toast }: ToastProps) => {
  return (
    <div className="fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg z-50 animate-slide-in">
      {toast.message}
    </div>
  );
};

interface ToastContainerProps {
  toasts: ToastMessage[];
  onRemove: (id: string) => void;
}

export const ToastContainer = ({ toasts }: ToastContainerProps) => {
  return (
    <>
      {toasts.map(toast => (
        <Toast key={toast.id} toast={toast} onRemove={() => {}} />
      ))}
    </>
  );
};
