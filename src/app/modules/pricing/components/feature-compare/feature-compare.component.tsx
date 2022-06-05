/* eslint-disable react/jsx-no-useless-fragment */
import { Check, HighlightOff, InfoOutlined } from '@mui/icons-material';
import { Grid, Tooltip, Typography } from '@mui/material';
import clsx from 'clsx';
import React from 'react';
import { GREEN } from 'styles/mui/variables';
import './feature-compare.style.scss';

interface FeatureCompareProps {
  index: number;
  name: string;
  isHelper: boolean;
  moreInfo: string;
  compares: (boolean | string)[];
}

function FeatureCompare({
  index,
  name,
  isHelper,
  moreInfo,
  compares,
}: FeatureCompareProps) {
  return (
    <Grid
      container
      spacing={0}
      className={clsx(
        { '--light-background': index % 2 === 0 },
        'feature-compare-description'
      )}
    >
      <Grid item xs={4.8} className="feature-name">
        <Typography>{name}</Typography>
        {moreInfo && (
          <>
            {isHelper ? (
              <Tooltip
                title={moreInfo}
                placement="bottom-end"
                className="helper"
              >
                <InfoOutlined />
              </Tooltip>
            ) : (
              <Typography className="extra">{moreInfo}</Typography>
            )}
          </>
        )}
      </Grid>

      {compares.map((item, index) => (
        <Grid item xs={2.4} key={index}>
          {typeof item === 'boolean' ? (
            <>
              {item ? (
                <Check sx={{ color: GREEN }} />
              ) : (
                <HighlightOff sx={{ color: 'red' }} />
              )}
            </>
          ) : (
            <Typography>{item}</Typography>
          )}
        </Grid>
      ))}
    </Grid>
  );
}

export default React.memo(FeatureCompare);
