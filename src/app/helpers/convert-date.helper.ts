import dayjs from 'dayjs';
import { DATE_TIME_FORMAT } from 'shared/const/date-time.const';

export const convertDateByFormat = (
  currentDate: string | Date,
  format: DATE_TIME_FORMAT
) => {
  const date = dayjs(currentDate);

  return date.isValid() ? date.format(format) : '';
};

export const getExpiredDateAndDayLeft = (
  addDate: number,
  createdDate: string
): string => {
  return `${convertDateByFormat(new Date(), DATE_TIME_FORMAT.CROSS_DATE)} (${
    addDate - dayjs(new Date()).diff(createdDate, 'day')
  } days left)`;
};
