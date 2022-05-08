import { styled } from '@mui/material/styles';
import Switch, { SwitchProps } from '@mui/material/Switch';
import * as React from 'react';
import { DARK_BLUE, GREEN } from 'styles/mui/variables';

const PricingSwitching = styled((props: SwitchProps) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(() => ({
  width: 50,
  height: 26,
  padding: 0,

  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: 2,
    color: GREEN,
    transitionDuration: '300ms',

    '&.Mui-checked': {
      transform: 'translateX(24px)',
      color: GREEN,
      '& + .MuiSwitch-track': {
        backgroundColor: DARK_BLUE,
        opacity: 1,
        border: 0,
      },
    },
  },

  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: 22,
    height: 22,
  },

  '& .MuiSwitch-track': {
    borderRadius: 13,
    backgroundColor: DARK_BLUE,
    opacity: 1,
  },
}));

export default PricingSwitching;
