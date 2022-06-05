import { ArrowDropDown } from '@mui/icons-material';
import { Accordion, AccordionSummary, Grid, Typography } from '@mui/material';
import clsx from 'clsx';
import React from 'react';
import '../../shared/styles/service-compare.style.scss';
import FeatureCompare from '../feature-compare/feature-compare.component';

function OrchestrateCompare() {
  const INTELLIGENT = [
    {
      featureContent: 'Smart Routing & Rules',
      compares: [
        {
          name: 'Language Routing',
          moreInfo: '',
          compares: [true, true, true],
          isHelper: true,
        },
        {
          name: 'Alternative Routing',
          moreInfo: '',
          compares: [false, true, true],
          isHelper: true,
        },
        {
          name: 'Location Routing',
          moreInfo:
            'Your customer can initiate a call simply by scanning a QR code',
          compares: [false, true, true],
          isHelper: true,
        },
        {
          name: 'Time Routing',
          moreInfo: '',
          compares: [true, true, true],
          isHelper: true,
        },
        {
          name: 'Percentage Routing',
          moreInfo: 'New',
          compares: [true, true, true],
          isHelper: false,
        },
      ],
    },
    {
      featureContent: 'Workflow Optimisation',
      compares: [
        {
          name: 'Dynamic Directory',
          moreInfo: '',
          compares: [true, true, true],
          isHelper: true,
        },
        {
          name: 'Unified Chat Room',
          moreInfo:
            'Your customer can initiate a call simply by clicking a web link',
          compares: [true, true, true],
          isHelper: true,
        },
        {
          name: 'Customer Journey in a Single View',
          moreInfo: '',
          compares: ['Not Usage', 'Usage', 'Usage'],
          isHelper: true,
        },
        {
          name: 'Visitor Insights',
          moreInfo: '',
          compares: [true, true, true],
          isHelper: true,
        },
        {
          name: 'Chat Transfer',
          moreInfo: 'Comming soon',
          compares: [true, true, true],
          isHelper: false,
        },
      ],
    },
  ];

  const TEAM = [
    {
      featureContent: 'Team Productivity',
      compares: [
        {
          name: 'Unlimited Staff-to-Staff Messaging',
          moreInfo: '',
          compares: [false, true, true],
          isHelper: true,
        },
        {
          name: 'Unlimited Group Messaging',
          moreInfo: '',
          compares: [true, true, true],
          isHelper: true,
        },
        {
          name: 'Unlimited Private Group Messaging',
          moreInfo:
            'Your customer can initiate a call simply by scanning a QR code',
          compares: [false, true, true],
          isHelper: true,
        },
        {
          name: 'Unlimited Staff-to-Staff On-net Call',
          moreInfo: '',
          compares: [true, true, true],
          isHelper: true,
        },
        {
          name: 'Unlimited Staff-to-Staff Call via Extension Number',
          moreInfo: '',
          compares: [false, true, true],
          isHelper: true,
        },
      ],
    },
  ];

  const PLAN = [INTELLIGENT, TEAM];
  const PLAN_NAME = ['INTELLIGENT ROUTING', 'TEAM COLLABORATION'];

  return (
    <div className="service-compare mt--L">
      <Grid item xs={12} className="mt--XS">
        <Typography variant="h5" className="service-name">
          Orchestrate
        </Typography>
      </Grid>

      {PLAN.map((plan, index) => (
        <div key={PLAN_NAME[index]}>
          <Grid
            item
            xs={12}
            className={clsx({ 'mt--ML': index }, 'mt--XXS mb--XS plan-name')}
          >
            <Typography variant="h6">{PLAN_NAME[index]}</Typography>
          </Grid>

          {plan.map((orchestrate) => (
            <Accordion
              className="feature-compare"
              key={orchestrate.featureContent}
            >
              <AccordionSummary
                expandIcon={<ArrowDropDown />}
                aria-controls="feature-compare"
              >
                <Typography className="font--16b">
                  {orchestrate.featureContent}
                </Typography>
              </AccordionSummary>

              <div className="feature-compare-content">
                <Grid container spacing={0}>
                  {orchestrate.compares.map((item, index) => (
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
      ))}
    </div>
  );
}

export default React.memo(OrchestrateCompare);
