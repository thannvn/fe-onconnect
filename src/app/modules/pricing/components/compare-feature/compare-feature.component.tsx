/* eslint-disable react/jsx-no-useless-fragment */
import {
  Accordion,
  AccordionSummary,
  Grid,
  Tooltip,
  Typography,
} from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { GREEN } from 'styles/mui/variables';
import './compare-feature.style.scss';
import {
  HighlightOff,
  ArrowDropDown,
  Check,
  InfoOutlined,
} from '@mui/icons-material';

interface CompareFeatureProps {
  partHeading: string;
  featureTitle: string;
}

interface FeatureDescriptionProps {
  className: string;
  name: string;
  isHelper: boolean;
  moreInfo: string;
  compares: (boolean | string)[];
}

function FeatureDescription({
  className,
  name,
  isHelper,
  moreInfo,
  compares,
}: FeatureDescriptionProps) {
  return (
    <Grid container spacing={0} className={`${className} feature-description`}>
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

function CompareFeature({ featureTitle, partHeading }: CompareFeatureProps) {
  const { t } = useTranslation();
  const fakeData = [
    {
      featureContent: 'Digital Channels',
      compares: [
        {
          name: 'Website - Live Chat and Call Widget',
          moreInfo: '',
          compares: [true, true, true],
          isHelper: true,
        },
        {
          name: 'Direct Chat & Call Links',
          moreInfo:
            'Your customer can initiate a call simply by clicking a web link',
          compares: [false, true, true],
          isHelper: true,
        },
        {
          name: 'Direct Chat & Call QR Codes',
          moreInfo:
            'Your customer can initiate a call simply by scanning a QR code',
          compares: [false, true, true],
          isHelper: true,
        },
        {
          name: 'WhatsApp Business',
          moreInfo: '',
          compares: [true, true, true],
          isHelper: true,
        },
        {
          name: 'Email',
          moreInfo: 'New',
          compares: [
            '1 default team email',
            'Up to 10 team emails',
            'Unlimited team emails',
          ],
          isHelper: false,
        },
      ],
    },
    {
      featureContent: 'Telecom Channels',
      compares: [
        {
          name: 'Local Numbers',
          moreInfo: '',
          compares: [true, true, true],
          isHelper: true,
        },
        {
          name: 'International Toll-free Numbers',
          moreInfo:
            'Your customer can initiate a call simply by clicking a web link',
          compares: [true, true, true],
          isHelper: true,
        },
        {
          name: 'Inbound and Outbound Minutes',
          moreInfo: '',
          compares: ['Not Usage', 'Usage', 'Usage'],
          isHelper: true,
        },
        {
          name: '1-1 SMS',
          moreInfo: '',
          compares: [true, true, true],
          isHelper: true,
        },
        {
          name: 'Bulk and Dynamic SMS Campaigns',
          moreInfo: 'Comming soon',
          compares: [true, true, true],
          isHelper: false,
        },
      ],
    },
  ];

  return (
    <div className="compare-feature">
      <Grid item xs={12} className="mt--XS">
        <Typography variant="h5" className="part-heading">
          {partHeading}
        </Typography>
      </Grid>

      <Grid item xs={12} className="mt--XXS mb--XS channel-title">
        <Typography variant="h6">{featureTitle}</Typography>
      </Grid>

      {fakeData.map((feature) => (
        <Accordion className="feature-compare-description">
          <AccordionSummary
            expandIcon={<ArrowDropDown />}
            aria-controls="feature-content"
          >
            <Typography className="font--16b">
              {feature.featureContent}
            </Typography>
          </AccordionSummary>

          <div className="feature-compare-content">
            <Grid container spacing={0}>
              {feature.compares.map((item, index) => (
                <FeatureDescription
                  className={index % 2 === 0 ? '--light-background' : ''}
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

export default React.memo(CompareFeature);
