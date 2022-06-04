import {
  BusinessRounded,
  ContactPhoneOutlined,
  LanguageOutlined,
  LocationOnOutlined,
} from '@mui/icons-material';
import { Avatar, Stack, Typography } from '@mui/material';
import avatar from 'app/assets/images/avatar-demo.png';
import {
  COMPANY_COUNTRY,
  LANGUAGE_USE,
} from 'app/modules/register-free/shared/const/options.const';
import { useAppSelector } from 'app/services/redux/hooks';
import { selectUser } from 'app/services/redux/slices/user-slice';
import React from 'react';
import './profile-info.style.scss';

function ProfileInfo() {
  const user = useAppSelector(selectUser);
  return (
    <div className="profile-info">
      <Stack direction="row" justifyContent="center">
        <Avatar src={avatar} sx={{ width: 300, height: 300 }} />
      </Stack>

      <Typography className="font--20b mt--XS">
        {user.firstName} {user.lastName}
      </Typography>
      <Typography className="hint-text">{user.email}</Typography>

      <Stack direction="row" alignItems="center" spacing={1} className="mt--XS">
        <ContactPhoneOutlined color="action" />
        <Typography>{user.phoneNumber}</Typography>
      </Stack>

      <Stack
        direction="row"
        alignItems="center"
        spacing={1}
        className="item-info"
      >
        <LanguageOutlined color="action" />

        <Typography>
          {LANGUAGE_USE.find((item) => item.value === user.language)?.label}
        </Typography>
      </Stack>

      <Stack
        direction="row"
        alignItems="center"
        spacing={1}
        className="item-info"
      >
        <BusinessRounded color="action" />
        <Typography>{user.companyName}</Typography>
      </Stack>

      <Stack
        direction="row"
        alignItems="center"
        spacing={1}
        className="item-info"
      >
        <LocationOnOutlined color="action" />
        <Typography>
          {
            COMPANY_COUNTRY.find(
              (item) => String(item.value) === user.companyRegion
            )?.label
          }
        </Typography>
      </Stack>
    </div>
  );
}

export default ProfileInfo;
