import CloseIcon from '@mui/icons-material/Close';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import * as React from 'react';

export interface DialogTitleProps {
  id?: string;
  children?: React.ReactNode;
  onClose: () => void;
}

function CloseDialogTitle(props: DialogTitleProps) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle
      sx={{ margin: 0, padding: 0, position: 'relative' }}
      {...other}
    >
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          disableRipple
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 0,
            top: 0,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

CloseDialogTitle.defaultProps = {
  children: <div />,
  id: '',
};

export default React.memo(CloseDialogTitle);
