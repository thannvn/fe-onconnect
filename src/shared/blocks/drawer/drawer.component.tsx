import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import MenuIcon from '@mui/icons-material/Menu';
import { Avatar, Menu, MenuItem, Stack, Typography } from '@mui/material';
import MuiAppBar from '@mui/material/AppBar';
import MuiDrawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { CSSObject, styled, Theme } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import avatar from 'app/assets/images/avatar-demo.png';
import logo from 'app/assets/images/logo.png';
import miniLogo from 'app/assets/images/mini-logo.png';
import { useAppDispatch } from 'app/services/redux/hooks';
import { logout } from 'app/services/redux/slices/user-slice';
import clsx from 'clsx';
import React, { useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  DRAWER_WIDTH,
  ICON,
  MenuItemProps,
  SETTING_ICON,
  AppBarProps,
  PageName,
} from 'shared/const/drawer.const';
import './drawer.style.scss';

const openedMixin = (theme: Theme): CSSObject => ({
  width: DRAWER_WIDTH,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 6px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 6px)`,
  },
});

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(!open && {
    width: `calc(100% - ${theme.spacing(7)} - 6px - 10px)`,
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${theme.spacing(8)} - 6px - 10px)`,
    },
  }),
  ...(open && {
    marginLeft: DRAWER_WIDTH,
    width: `calc(100% - ${DRAWER_WIDTH}px - 10px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  width: DRAWER_WIDTH,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme),
  }),
}));

export default function MiniDrawer() {
  const [open, setOpen] = useState<boolean>(true);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const menuList = useRef<MenuItemProps[]>([
    {
      section: 'MANAGEMENT',
      menu: [
        { label: PageName.TRUNK_MANAGEMENT, href: '/admin/trunk-management' },
        {
          label: PageName.CUSTOMER_MANAGEMENT,
          href: '/admin/customer-management',
        },
      ],
    },
    {
      section: 'ROUTING',
      menu: [
        { label: PageName.HOTLINE_ROUTING, href: '/admin/hotline-routing' },
        { label: PageName.VIRTUAL_ROUTING, href: '/admin/virtual-routing' },
      ],
    },
  ]).current;
  const SETTING_MENU = useRef<string[]>(['Đăng xuất']).current;

  const handleDrawer = () => {
    setOpen((previous) => !previous);
  };

  const handleOpenMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    dispatch(logout());
    handleCloseMenu();
    navigate('/login');
  };

  const handleRedirect = (url: string) => {
    navigate(url);
  };

  const getTitlePage = (): string => {
    return 'Home';
  };

  return (
    <div className="mini-drawer">
      <AppBar position="fixed" open={open} className="app-bar">
        <Toolbar>
          <IconButton
            aria-label="open drawer"
            onClick={handleDrawer}
            disableRipple
            sx={{ marginLeft: 0 }}
          >
            {open ? <ArrowForwardIosIcon /> : <MenuIcon />}
          </IconButton>

          <Typography variant="h6" className="page-name ml--XXS">
            {getTitlePage()}
          </Typography>

          <div className="setting">
            <IconButton onClick={handleOpenMenu} disableRipple>
              <Avatar
                alt="Avatar"
                src={avatar}
                sx={{ width: 50, height: 50 }}
              />
            </IconButton>

            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorEl)}
              onClose={handleCloseMenu}
              sx={{ top: '-6px' }}
            >
              {SETTING_MENU.map((setting, index) => (
                <MenuItem
                  key={setting}
                  onClick={handleLogout}
                  className="menu-item"
                >
                  <Stack
                    direction="row"
                    alignItems="center"
                    spacing={1.5}
                    sx={{ width: 150 }}
                  >
                    {SETTING_ICON[index]}
                    <Typography>{setting}</Typography>
                  </Stack>
                </MenuItem>
              ))}
            </Menu>
          </div>
        </Toolbar>
      </AppBar>

      <Drawer variant="permanent" open={open} className="drawer-content">
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          className={clsx({ 'mt--XS mb--XS': !open }, 'mt--XXS')}
        >
          <Link to="/admin/home">
            <img
              src={open ? logo : miniLogo}
              alt=""
              width={open ? 120 : 25}
              height={open ? 60 : 25}
            />
          </Link>
        </Stack>

        <List>
          {menuList.map((item, itemIndex) => (
            <div key={item.section} className={clsx({ 'mt--XS': open })}>
              {open && (
                <Typography className="section">{item.section}</Typography>
              )}

              {item.menu.map((menu, menuIndex) => (
                <ListItem
                  key={menu.href}
                  disablePadding
                  className={clsx(
                    { 'item-selected': location.pathname === menu.href },
                    'item'
                  )}
                >
                  <ListItemButton
                    disableRipple
                    onClick={() => handleRedirect(menu.href)}
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? 'initial' : 'center',
                      px: 2.5,
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : 'auto',
                        justifyContent: 'center',
                      }}
                    >
                      {ICON[itemIndex][menuIndex]}
                    </ListItemIcon>
                    <ListItemText
                      primary={menu.label}
                      sx={{
                        opacity: open ? 1 : 0,
                      }}
                    />
                  </ListItemButton>
                </ListItem>
              ))}
            </div>
          ))}
        </List>
      </Drawer>
    </div>
  );
}
