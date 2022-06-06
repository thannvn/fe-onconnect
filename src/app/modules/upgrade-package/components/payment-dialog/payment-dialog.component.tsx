import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import React, { useCallback, useState } from 'react';
import CloseDialogTitle from 'shared/blocks/close-dialog/close-dialog.component';
import paymentQR from 'app/assets/images/payment-qr.png';

export default function usePaymentDialog() {
  const [isOpen, setOpen] = useState<boolean>(false);

  const open = () => {
    setOpen(true);
  };

  const close = () => {
    setOpen(false);
  };

  const PaymentDialog = useCallback(
    () => (
      <Dialog open={isOpen} maxWidth="xs" onClose={close}>
        <CloseDialogTitle onClose={close} />
        <DialogContent className="mt--S">
          <img
            alt="payment-qr"
            src={paymentQR}
            style={{ width: 340, height: 440 }}
          />
        </DialogContent>
      </Dialog>
    ),
    [isOpen]
  );

  return { PaymentDialog, open, close };
}
