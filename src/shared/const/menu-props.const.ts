import { MenuProps } from '@mui/material';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

export const DEFAULT_MENU: Partial<MenuProps> = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 5.5 + ITEM_PADDING_TOP,
    },
  },
  anchorOrigin: {
    vertical: 'bottom',
    horizontal: 'left',
  },
  transformOrigin: {
    vertical: 'top',
    horizontal: 'left',
  },
};

export const PHONE_CODE_MENU: Partial<MenuProps> = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 5.5 + ITEM_PADDING_TOP,
      width: '29rem',
    },
  },
  anchorOrigin: {
    vertical: 'bottom',
    horizontal: 'left',
  },
  transformOrigin: {
    vertical: 'top',
    horizontal: 'left',
  },
};
