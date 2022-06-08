import {
  ListAlt,
  Logout,
  ManageAccounts,
  PhoneForwarded,
  Route,
} from '@mui/icons-material';
import { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import React from 'react';

export const DRAWER_WIDTH = 250;

export interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

export interface MenuItemProps {
  section: string;
  menu: MenuProps[];
}

interface MenuProps {
  label: string;
  href: string;
}

export enum PageName {
  TRUNK_MANAGEMENT = 'Trunk Management',
  CUSTOMER_MANAGEMENT = 'Customer Management',
  HOTLINE_ROUTING = 'Hotline Routing',
  VIRTUAL_ROUTING = 'Virtual Number Routing',
  HOME = 'Home',
  TRUNK_DETAIL = 'Trunk Detail',
  HOTLINE_DETAIL = 'Hotline Group Detail',
  VIRTUAL_DETAIL = 'Virtual Number Group Detail',
}

export const ICON = [
  [<ListAlt fontSize="small" />, <ManageAccounts fontSize="small" />],
  [<PhoneForwarded fontSize="small" />, <Route fontSize="small" />],
];

export const SETTING_ICON = [<Logout fontSize="small" color="action" />];

export const HREF = [];
