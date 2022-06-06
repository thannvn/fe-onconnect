import React from 'react';
import { Link } from 'react-router-dom';
import { DATE_TIME_FORMAT } from 'shared/const/date-time.const';
import Typography from '@mui/material/Typography';
import { convertDateByFormat } from 'app/helpers/convert-date.helper';
import { Stack } from '@mui/material';
import { DiamondRounded } from '@mui/icons-material';
import { useAppSelector } from 'app/services/redux/hooks';
import { selectUser } from 'app/services/redux/slices/user-slice';
import './package-info.style.scss';

function PackageInfo() {
  const user = useAppSelector(selectUser);

  return (
    <div className="package-info">
      <Stack direction="row" alignItems="center" spacing={1}>
        <Typography>Tên gói: Business</Typography>
        <Link to="/upgrade-package" className="upgrade-package">
          <span>Upgrade</span>
          <DiamondRounded fontSize="small" sx={{ color: '#ffa928' }} />
        </Link>
      </Stack>
      <Typography className="mt--XS">
        Ngày đăng ký:{' '}
        {convertDateByFormat(user.createdDate, DATE_TIME_FORMAT.CROSS_DATE)}
      </Typography>
      <Typography>Thời hạn sử dụng: Còn 25 ngày</Typography>
    </div>
  );
}
export default React.memo(PackageInfo);
