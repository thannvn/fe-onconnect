import {
  CancelOutlined,
  CheckCircleOutlineOutlined,
  InfoOutlined,
} from '@mui/icons-material';
import { Stack, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import React, { useCallback, useState } from 'react';

export interface OpenDialogProps {
  message: string;
  type?: 'warning' | 'error' | 'success';
}

interface DialogState extends OpenDialogProps {
  isOpen: boolean;
}

export default function useMessageDialog() {
  const [dialogState, setDialogState] = useState<DialogState>({
    isOpen: false,
    message: '',
    type: 'success',
  });

  const open = ({ type = 'success', message }: OpenDialogProps) => {
    setDialogState((prev) => ({
      ...prev,
      message,
      type,
      isOpen: true,
    }));
  };

  const close = () => {
    setDialogState((prev) => ({ ...prev, isOpen: false }));
  };

  const MessageDialog = useCallback(
    () => (
      <Dialog
        open={dialogState.isOpen}
        aria-labelledby="message-dialog-title"
        aria-describedby="message-dialog-description"
        maxWidth="xs"
      >
        <Stack direction="row" className="mt--XS" justifyContent="center">
          {dialogState.type === 'success' && (
            <CheckCircleOutlineOutlined color="success" fontSize="large" />
          )}
          {dialogState.type === 'error' && (
            <CancelOutlined color="error" fontSize="large" />
          )}
          {dialogState.type === 'warning' && (
            <InfoOutlined color="warning" fontSize="large" />
          )}
        </Stack>

        <DialogContent>
          <Typography textAlign="center" id="message-dialog-description">
            {dialogState.message}
          </Typography>
        </DialogContent>

        <DialogActions sx={{ justifyContent: 'center' }}>
          <Button
            variant="contained"
            color={dialogState.type}
            sx={{ textTransform: 'none' }}
            onClick={close}
          >
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [dialogState]
  );

  return { MessageDialog, open, close };
}
