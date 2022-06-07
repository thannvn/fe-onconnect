import { AccountCircle, Home, Logout } from '@mui/icons-material';
import { IconButton, Menu, MenuItem, Stack, Typography } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import AdminAPI from 'app/api/admin.api';
import { convertDateByFormat } from 'app/helpers/convert-date.helper';
import useChangePageSize from 'app/hooks/change-page-size.hook';
import { useAppDispatch } from 'app/services/redux/hooks';
import { logout } from 'app/services/redux/slices/user-slice';
import dayjs from 'dayjs';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CellAction from 'shared/blocks/cell-action/cell-action.component';
import CustomRow from 'shared/blocks/custom-row/custom-row.component';
import Loading from 'shared/blocks/loading/loading.component';
import addToast from 'shared/blocks/toastify/add-toast.component';
import { ROW_PAGE_OPTIONS } from 'shared/const/data-grid.const';
import { DATE_TIME_FORMAT } from 'shared/const/date-time.const';
import { Message } from 'shared/const/message.const';
import { UserListInfo } from '../shared/admin-home.const';
import './admin-home.style.scss';

const SETTING_ICON = [<Logout fontSize="small" color="action" />];
const SETTING_MENU = ['Logout'];

function AdminHomePage() {
  const [settingAnchorEl, setSettingAnchorEl] =
    React.useState<null | HTMLElement>(null);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { pageSize, changePageSize } = useChangePageSize();
  const [loading, setLoading] = useState<boolean>(false);
  const userList = useRef<UserListInfo[]>([]);

  const COLUMN_CONFIG = useRef<GridColDef[]>([
    { field: 'id', headerName: 'Id', flex: 0.25, sortable: true },
    { field: 'name', headerName: 'Name', flex: 1, sortable: false },
    { field: 'email', headerName: 'Email', flex: 1, sortable: false },
    {
      field: 'phoneNumber',
      headerName: 'Phone Number',
      flex: 1,
      sortable: false,
    },
    {
      field: 'packageName',
      headerName: 'Package name',
      flex: 1,
      sortable: false,
    },
    {
      field: 'startDate',
      headerName: 'Start date',
      flex: 0.6,
      sortable: false,
    },
    {
      field: 'expiredDate',
      headerName: 'Expired date',
      flex: 0.6,
      sortable: false,
    },
    {
      field: 'action',
      headerName: 'Action',
      flex: 0.3,
      sortable: false,
      renderCell: (cellValues) => {
        return (
          <CellAction
            deleteAble={false}
            editAble={false}
            handleSendMail={() => handleSendMail(cellValues.row)}
          />
        );
      },
    },
  ]).current;

  const handleSendMail = async (data: UserListInfo) => {
    try {
      setLoading(true);
      await AdminAPI.warningExpiredDate(data.id);
      addToast({ message: Message.SEND_MAIL_SUCCESS, type: 'success' });
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  const handleOpenSetting = (event: React.MouseEvent<HTMLElement>) => {
    setSettingAnchorEl(event.currentTarget);
  };
  const handleCloseSetting = () => {
    setSettingAnchorEl(null);
  };

  const handleLogout = () => {
    dispatch(logout());
    handleCloseSetting();
    navigate('/login');
  };

  const getUserList = useCallback(async () => {
    try {
      setLoading(true);
      const curentDate = dayjs(new Date());

      const result = await AdminAPI.getAllUser();
      if (result) {
        userList.current = result.userList.map((item) => ({
          email: item.email,
          id: item.id,
          name: `${item.firstName} ${item.lastName}`,
          packageName: item.Package.title,
          phoneNumber: item.phoneNumber,
          startDate: convertDateByFormat(
            item.createdAt,
            DATE_TIME_FORMAT.CROSS_DATE
          ),
          expiredDate: `${
            30 - curentDate.diff(dayjs(item.createdAt), 'days')
          } days left`,
          companyName: item.companyName,
          companyRegion: item.companyRegion,
        }));
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getUserList();
  }, [getUserList]);

  return (
    <>
      <Loading open={loading} />

      <div className="admin-home">
        <div className="header">
          <Stack direction="row" alignItems="center" spacing={1}>
            <Home />
            <span>/</span>
            <Typography className="font--16b">Home</Typography>
          </Stack>

          <Stack direction="row" className="right-section">
            <IconButton onClick={handleOpenSetting} disableRipple>
              <AccountCircle />
            </IconButton>

            <Menu
              id="setting-menu"
              anchorEl={settingAnchorEl}
              keepMounted
              open={Boolean(settingAnchorEl)}
              onClose={handleCloseSetting}
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
                    sx={{ width: 120 }}
                  >
                    {SETTING_ICON[index]}
                    <Typography>{setting}</Typography>
                  </Stack>
                </MenuItem>
              ))}
            </Menu>
          </Stack>
        </div>

        <div className="data-grid-custom">
          <DataGrid
            rows={userList.current}
            columns={COLUMN_CONFIG}
            pageSize={pageSize}
            onPageSizeChange={changePageSize}
            rowsPerPageOptions={ROW_PAGE_OPTIONS}
            disableColumnMenu
            rowHeight={60}
            hideFooterSelectedRowCount
            components={{ Row: CustomRow }}
          />
        </div>
      </div>
    </>
  );
}

export default AdminHomePage;
