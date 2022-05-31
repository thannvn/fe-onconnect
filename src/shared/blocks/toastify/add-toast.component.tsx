import React from 'react';
import { toast, ToastPosition, TypeOptions } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface Toast {
  message: string;
  position?: ToastPosition;
  type: TypeOptions;
}

export default function addToast({
  message,
  position = 'top-center',
  type,
}: Toast): React.ReactNode {
  return toast(message, { position, type, theme: 'colored', autoClose: 3000 });
}
