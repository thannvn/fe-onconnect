import { ArrowDropDown } from '@mui/icons-material';
import { Accordion, AccordionSummary, Grid, Typography } from '@mui/material';
import React from 'react';
import '../../shared/styles/service-compare.style.scss';
import FeatureCompare from '../feature-compare/feature-compare.component';

function EvaluateCompare() {
  const EVALUATE = [
    {
      featureContent: 'Reports, Insight, and Analytics',
      compares: [
        {
          name: 'Prospect Data',
          moreInfo: '',
          compares: [true, true, true],
          isHelper: false,
        },
        {
          name: 'Real-time Dashboard Statistics and Monitoring',
          moreInfo: '',
          compares: [true, true, true],
          isHelper: false,
        },
        {
          name: 'Enquiry Reports',
          moreInfo: '',
          compares: [false, true, true],
          isHelper: false,
        },
        {
          name: 'Call Reports',
          moreInfo: '',
          compares: [true, true, true],
          isHelper: true,
        },
        {
          name: 'SMS Reports',
          moreInfo: 'New',
          compares: [true, true, true],
          isHelper: false,
        },
      ],
    },
    {
      featureContent: 'Integrations',
      compares: [
        {
          name: 'Shopify',
          moreInfo: '',
          compares: [true, true, true],
          isHelper: true,
        },
        {
          name: 'BigCommerce',
          moreInfo: '',
          compares: [true, true, true],
          isHelper: true,
        },
        {
          name: 'WordPress',
          moreInfo: '',
          compares: [true, true, true],
          isHelper: true,
        },
        {
          name: 'Wix',
          moreInfo: '',
          compares: [true, true, true],
          isHelper: true,
        },
        {
          name: 'Joomla',
          moreInfo: 'Comming soon',
          compares: [true, true, true],
          isHelper: false,
        },
      ],
    },
    {
      featureContent: 'Customisation',
      compares: [
        {
          name: 'Widget Colour',
          moreInfo: '',
          compares: [true, true, true],
          isHelper: true,
        },
        {
          name: 'Logo in Chat Window and Widget',
          moreInfo: '',
          compares: [true, true, true],
          isHelper: true,
        },
        {
          name: 'Branded In-call Video and Static Image Ads',
          moreInfo: '',
          compares: ['1', '10', '10'],
          isHelper: true,
        },
        {
          name: 'Multilingual Customer Support',
          moreInfo: '',
          compares: [true, true, true],
          isHelper: true,
        },
        {
          name: 'Dashboard Language Selection',
          moreInfo: '',
          compares: [true, true, true],
          isHelper: false,
        },
      ],
    },
    {
      featureContent: 'Security',
      compares: [
        {
          name: '2FA',
          moreInfo: '',
          compares: [true, true, true],
          isHelper: true,
        },
        {
          name: 'Third-party Authentication',
          moreInfo: '',
          compares: [true, true, true],
          isHelper: true,
        },
        {
          name: 'IP Allow and Block Lists',
          moreInfo: '',
          compares: [true, true, true],
          isHelper: true,
        },
        {
          name: 'Phone Number Allow and Block Lists',
          moreInfo: '',
          compares: [true, true, true],
          isHelper: true,
        },
        {
          name: 'Login Restrictions',
          moreInfo: '',
          compares: [true, true, true],
          isHelper: false,
        },
      ],
    },
  ];

  return (
    <div className="service-compare mt--L">
      <Grid item xs={12} className="mt--XS">
        <Typography variant="h5" className="service-name mb--XS">
          Evaluate
        </Typography>
      </Grid>

      {EVALUATE.map((evaluate) => (
        <Accordion className="feature-compare" key={evaluate.featureContent}>
          <AccordionSummary
            expandIcon={<ArrowDropDown />}
            aria-controls="feature-compare"
          >
            <Typography className="font--16b">
              {evaluate.featureContent}
            </Typography>
          </AccordionSummary>

          <div className="feature-compare-content">
            <Grid container spacing={0}>
              {evaluate.compares.map((item, index) => (
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
        </Accordion>
      ))}
    </div>
  );
}

export default React.memo(EvaluateCompare);
