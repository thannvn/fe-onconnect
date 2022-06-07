import { DiamondRounded } from '@mui/icons-material';
import { Stack } from '@mui/material';
import Typography from '@mui/material/Typography';
import { convertDateByFormat } from 'app/helpers/convert-date.helper';
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
      <Typography className="mt--XS">
        Max extension: {packageInfo?.value}
      </Typography>
      <Typography className="mt--XS">
        Start date:{' '}
        {convertDateByFormat(user.createdDate, DATE_TIME_FORMAT.CROSS_DATE)}
      </Typography>
    </div>
  );
}

PackageInfoTab.defaultProps = {
  packageInfo: undefined,
};

export default React.memo(PackageInfoTab);
