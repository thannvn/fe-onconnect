import React, { useCallback, useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export interface OpenDialogProps {
  title: string;
  description: string;
  type?: 'warning' | 'error' | '';
  handleConfirm?: () => void;
}

interface DialogState extends OpenDialogProps {
  isOpen: boolean;
}

export default function useConfirmDialog() {
  const [dialogState, setDialogState] = useState<DialogState>({
    isOpen: false,
    title: '',
    description: '',
    type: '',
  });

  const openConfirmDialog = ({
    title,
    type = '',
    description,
  }: OpenDialogProps) => {
    setDialogState((prev) => ({
      ...prev,
      description,
      title,
      type,
      isOpen: true,
    }));
  };

  const closeConfirmDialog = () => {
    setDialogState((prev) => ({ ...prev, isOpen: false }));
  };

  const handleConfirm = () => {
    if (dialogState.handleConfirm) dialogState.handleConfirm();
    setDialogState((prev) => ({ ...prev, isOpen: false }));
  };

  const ConfirmDialog = useCallback(
    () => (
      <Dialog
        open={dialogState.isOpen}
        onClose={closeConfirmDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{dialogState.title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {dialogState.description}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={closeConfirmDialog}
            color="inherit"
            variant="contained"
          >
            Hủy bỏ
          </Button>
          <Button
            variant="contained"
            color={dialogState.type || 'primary'}
            onClick={handleConfirm}
          >
            Xác nhận
          </Button>
        </DialogActions>
      </Dialog>
    ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [dialogState]
  );

  return { ConfirmDialog, openConfirmDialog, closeConfirmDialog };
}
