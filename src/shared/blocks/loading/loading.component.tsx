import { Backdrop, CircularProgress } from '@mui/material';
import React from 'react';

interface LoadingProps {
  open: boolean;
}

function Loading({ open }: LoadingProps) {
  return (
    <Backdrop
      open={open}
      sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.modal + 1 }}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
}

export default React.memo(Loading);
