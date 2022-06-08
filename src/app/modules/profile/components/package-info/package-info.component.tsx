import { DiamondRounded } from '@mui/icons-material';
import { Link as MatLink, Stack } from '@mui/material';
import Typography from '@mui/material/Typography';
import {
  convertDateByFormat,
  getExpiredDateAndDayLeft,
} from 'app/helpers/convert-date.helper';
import { useAppSelector } from 'app/services/redux/hooks';
import { selectUser } from 'app/services/redux/slices/user-slice';
import React from 'react';
import { Link } from 'react-router-dom';
import { DATE_TIME_FORMAT } from 'shared/const/date-time.const';
import { PackageInfo } from 'shared/const/pricing.const';
import './package-info.style.scss';

interface PackageInfoProps {
  packageInfo?: PackageInfo;
}

function PackageInfoTab({ packageInfo }: PackageInfoProps) {
  const user = useAppSelector(selectUser);

  return (
    <div className="package-info">
      <Stack direction="row" alignItems="center" spacing={1}>
        <Typography>Package name: {packageInfo?.title}</Typography>
        <Link to="/upgrade-package" className="upgrade-package">
          <span>Upgrade</span>
          <DiamondRounded fontSize="small" sx={{ color: '#ffa928' }} />
        </Link>
      </Stack>
      <Typography className="mt--XXS">
        Max extension: {packageInfo?.value}
      </Typography>
      <Typography className="mt--XXS">
        Start date:{' '}
        {convertDateByFormat(user.createdAt, DATE_TIME_FORMAT.CROSS_DATE)}
      </Typography>

      <Typography className="mt--XXS">
        Expired date: {getExpiredDateAndDayLeft(30, user.createdAt)}
      </Typography>

      <Typography className="mt--XXS">
        Please click to this link to use OnConnect:
        <MatLink href="https://pbx.onconnect.vn/" underline="none">
          {' '}
          https://pbx.onconnect.vn/
        </MatLink>
      </Typography>
    </div>
  );
}

PackageInfoTab.defaultProps = {
  packageInfo: undefined,
};

export default React.memo(PackageInfoTab);
