import { Stack } from '@mui/material';
import React from 'react';
import MiniDrawer from '../drawer/drawer.component';

function DrawerLayout({ children }: { children: JSX.Element }) {
  return (
    <Stack direction="row" spacing={0}>
      <MiniDrawer />

      {children}
    </Stack>
  );
}

export default DrawerLayout;
