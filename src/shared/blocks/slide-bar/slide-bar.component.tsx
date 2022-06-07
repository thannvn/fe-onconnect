/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Dashboard, Home, PieChart, TableView } from '@mui/icons-material';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import logo from 'app/assets/images/logo-white.png';
import clsx from 'clsx';
import * as React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './slide-bar.style.scss';

interface Page {
  name: string;
  href: string;
}

const ICON = [<Home />, <Dashboard />, <TableView />, <PieChart />];
const PAGE: Page[] = [
  {
    name: 'Home',
    href: '/admin',
  },
  {
    name: 'Dashboard',
    href: '/admin/dashboard',
  },
  {
    name: 'Tables',
    href: '/admin/tables',
  },
  {
    name: 'Chart',
    href: '/admin/chart',
  },
];

export default function SlideBar() {
  const navigate = useNavigate();
  const currentUrl = useLocation().pathname;

  return (
    <Drawer className="slide-bar" variant="persistent" anchor="left" open>
      <img
        alt="logo"
        src={logo}
        className="logo"
        onClick={() => navigate('/admin')}
      />

      <List>
        {PAGE.map((page, index) => (
          <ListItem key={page.name}>
            <ListItemButton
              className={clsx({
                'selected-button': currentUrl === page.href,
              })}
            >
              {ICON[index]}
              <ListItemText primary={page.name} className="ml--XXS" />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}
