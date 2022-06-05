import { Grid, Typography } from '@mui/material';
import React from 'react';
import FeatureCompare from '../feature-compare/feature-compare.component';
import './support-service.style.scss';

function SupportService() {
  const SUPPORT = [
    {
      name: 'Email, Chat, and Video Support',
      moreInfo: '',
      compares: [true, true, true],
      isHelper: false,
    },
    {
      name: '24/7 Technical Support',
      moreInfo: '',
      compares: [true, true, true],
      isHelper: false,
    },
    {
      name: 'Customer Success Support',
      moreInfo: '',
      compares: ['Dedicated Team', 'Dedicated Manager', 'Dedicated Manager'],
      isHelper: false,
    },
    {
      name: 'Tailored Training Session',
      moreInfo: '',
      compares: [true, true, true],
      isHelper: true,
    },
    {
      name: 'Ongoing Product Consultation',
      moreInfo: '',
      compares: [true, true, true],
      isHelper: false,
    },
    {
      name: 'SLA',
      moreInfo: '',
      compares: [true, true, true],
      isHelper: false,
    },
  ];

  return (
    <div className="support-service mt--L">
      <Grid item xs={12} className="mt--XS">
        <Typography variant="h5" className="service-name mb--XS">
          Support Service
        </Typography>
      </Grid>

      <Grid container spacing={0} className="support-table">
        {SUPPORT.map((item, index) => (
          <FeatureCompare
            index={index}
            key={item.name}
            name={item.name}
            moreInfo={item.moreInfo}
            compares={item.compares}
            isHelper={item.isHelper}
          />
        ))}
      </Grid>
    </div>
  );
}

export default React.memo(SupportService);
