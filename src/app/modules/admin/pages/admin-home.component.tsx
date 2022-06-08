import {
  AccountCircle,
  Home,
  Leaderboard,
  Logout,
  PersonAdd,
  Store,
  Weekend,
} from '@mui/icons-material';
import {
  Divider,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Typography,
} from '@mui/material';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import AdminAPI from 'app/api/admin.api';
import {
  convertDateByFormat,
  getExpiredDateAndDayLeft,
} from 'app/helpers/convert-date.helper';
import useChangePageSize from 'app/hooks/change-page-size.hook';
import { useAppDispatch } from 'app/services/redux/hooks';
import { logout } from 'app/services/redux/slices/user-slice';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import CellAction from 'shared/blocks/cell-action/cell-action.component';
import CustomRow from 'shared/blocks/custom-row/custom-row.component';
import Loading from 'shared/blocks/loading/loading.component';
import addToast from 'shared/blocks/toastify/add-toast.component';
import { ROW_PAGE_OPTIONS } from 'shared/const/data-grid.const';
import { DATE_TIME_FORMAT } from 'shared/const/date-time.const';
import { Message } from 'shared/const/message.const';
import UserCountChart from '../components/user-count-chart/user-count-chart.component';
import WebsiteViewChart from '../components/website-view-chart/website-view-chart.component';
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
    { field: 'id', headerName: 'ID', flex: 0.25, sortable: true },
    { field: 'name', headerName: 'Name', flex: 0.8, sortable: false },
    { field: 'email', headerName: 'Email', flex: 1, sortable: false },
    {
      field: 'phoneNumber',
      headerName: 'Phone Number',
      flex: 0.5,
      sortable: false,
    },
    {
      field: 'packageName',
      headerName: 'Package name',
      flex: 1,
      sortable: false,
      valueGetter: (params: GridValueGetterParams) =>
        `${params.row.packageName} (${params.row.value} extensions)`,
    },
    {
      field: 'startDate',
      headerName: 'Start date',
      flex: 0.5,
      sortable: false,
    },
    {
      field: 'expiredDate',
      headerName: 'Expired date',
      flex: 1,
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
      const result = await AdminAPI.getAllUser();
      if (result) {
        userList.current = result.userList.map((item) => ({
          email: item.email,
          id: item.id,
          name: `${item.firstName} ${item.lastName}`,
          packageName: item.Package?.title,
          phoneNumber: item.phoneNumber,
          startDate: convertDateByFormat(
            item.createdAt,
            DATE_TIME_FORMAT.CROSS_DATE
          ),
          expiredDate: getExpiredDateAndDayLeft(30, item.createdAt),
          companyName: item.companyName,
          companyRegion: item.companyRegion,
          value: item.Package?.value,
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
      <Helmet>
        <title>Admin Home Page</title>
      </Helmet>

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

        <Stack direction="row" className="mt--M" width="100%">
          <div className="card-info">
            <div className="title">
              <div className="icon">
                <Weekend />
              </div>

              <Typography>Upgrade Package</Typography>
              <Typography>20</Typography>
            </div>

            <Divider className="mt--XXS mb--XXS" />

            <Typography>
              <span>+55%</span> than lask week
            </Typography>
          </div>

          <div className="card-info ml--S">
            <div className="title">
              <div className="icon --user">
                <Leaderboard />
              </div>

              <Typography>Today&apos;s Users</Typography>
              <Typography>1000</Typography>
            </div>

            <Divider className="mt--XXS mb--XXS" />

            <Typography>
              <span>+3%</span> than last month
            </Typography>
          </div>

          <div className="card-info ml--S">
            <div className="title">
              <div className="icon --revenue">
                <Store />
              </div>

              <Typography>Revenue</Typography>
              <Typography>34k</Typography>
            </div>

            <Divider className="mt--XXS mb--XXS" />

            <Typography>
              <span>+1%</span> than yesterday
            </Typography>
          </div>

          <div className="card-info ml--S">
            <div className="title">
              <div className="icon --follower">
                <PersonAdd />
              </div>

              <Typography>Followers</Typography>
              <Typography>+91</Typography>
            </div>

            <Divider className="mt--XXS mb--XXS" />

            <Typography>Just updated</Typography>
          </div>
        </Stack>

        <Stack direction="row" className="mt--M" width="100%">
          <div className="chart-wrapper">
            <WebsiteViewChart />
            <div className="chart-info">
              <Typography className="mt--L title">Website Views</Typography>
              <Typography className="description">
                Last Campaign Performance
              </Typography>
            </div>
          </div>

          <div className="chart-wrapper ml--M">
            <UserCountChart />
            <div className="chart-info">
              <Typography className="mt--L title">Monthly User</Typography>
              <Typography className="description">
                <span>(+15%)</span> increase in monthly.
              </Typography>
            </div>
          </div>
        </Stack>

        <div className="data-grid-custom mt--S">
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
