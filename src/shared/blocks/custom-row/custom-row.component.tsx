import { GridRow, GridRowProps } from '@mui/x-data-grid';
import clsx from 'clsx';
import * as React from 'react';

function CustomRow(props: GridRowProps) {
  const { index, ...other } = props;

  return (
    <GridRow
      index={index}
      className={clsx(index % 2 === 0 ? 'odd' : 'even')}
      {...other}
    />
  );
}

export default CustomRow;
