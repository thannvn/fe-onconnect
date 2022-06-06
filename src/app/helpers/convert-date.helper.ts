import dayjs from 'dayjs';
import { DATE_TIME_FORMAT } from 'shared/const/date-time.const';

export const convertDateByFormat = (
  currentDate: string,
  format: DATE_TIME_FORMAT
) => {
  const date = dayjs(currentDate);

  return date.isValid() ? date.format(format) : '';
};
