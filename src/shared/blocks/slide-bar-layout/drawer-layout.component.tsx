import { Stack } from '@mui/material';
import React from 'react';
import SlideBar from '../slide-bar/slide-bar.component';

function SlideBarLayout({ children }: { children: JSX.Element }) {
  return (
    <Stack direction="row" spacing={0}>
      <SlideBar />

      {children}
    </Stack>
  );
}

export default SlideBarLayout;
