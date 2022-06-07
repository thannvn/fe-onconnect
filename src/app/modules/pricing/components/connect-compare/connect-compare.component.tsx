import { ArrowDropDown } from '@mui/icons-material';
import { Accordion, AccordionSummary, Grid, Typography } from '@mui/material';
import clsx from 'clsx';
import React from 'react';
import { CompareInfo } from 'shared/const/pricing.const';
import '../../shared/styles/service-compare.style.scss';
import FeatureCompare from '../feature-compare/feature-compare.component';

interface ConnectCompareProps {
  compareData: CompareInfo[];
}

function ConnectCompare({ compareData }: ConnectCompareProps) {
  const CHANNEL = [
    {
      featureContent: 'Digital Channels',
      compares: [
        {
          name: 'Website - Live Chat and Call Widget',
          moreInfo: '',
          compares: [
            compareData?.[0]?.isWebsiteLiveChat,
            compareData?.[1]?.isWebsiteLiveChat,
            compareData?.[2]?.isWebsiteLiveChat,
          ],
          isHelper: true,
        },
        {
          name: 'Direct Chat & Call Links',
          moreInfo:
            'Your customer can initiate a call simply by clicking a web link',
          compares: [
            compareData?.[0]?.isChatCallLink,
            compareData?.[1]?.isChatCallLink,
            compareData?.[2]?.isChatCallLink,
          ],
          isHelper: true,
        },
        {
          name: 'Direct Chat & Call QR Codes',
          moreInfo:
            'Your customer can initiate a call simply by scanning a QR code',
          compares: [
            compareData?.[0]?.isChatCallQR,
            compareData?.[1]?.isChatCallQR,
            compareData?.[2]?.isChatCallQR,
          ],
          isHelper: true,
        },
        {
          name: 'WhatsApp Business',
          moreInfo: '',
          compares: [
            compareData?.[0]?.isWhatsApp,
            compareData?.[1]?.isWhatsApp,
            compareData?.[2]?.isWhatsApp,
          ],
          isHelper: true,
        },
        {
          name: 'Email',
          moreInfo: 'New',
          compares: [
            compareData?.[0]?.email,
            compareData?.[1]?.email,
            compareData?.[2]?.email,
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
          compares: [
            compareData?.[0]?.isLocalNumber,
            compareData?.[1]?.isLocalNumber,
            compareData?.[2]?.isLocalNumber,
          ],
          isHelper: true,
        },
        {
          name: 'International Toll-free Numbers',
          moreInfo:
            'Your customer can initiate a call simply by clicking a web link',
          compares: [
            compareData?.[0]?.isTollFreeNumber,
            compareData?.[1]?.isTollFreeNumber,
            compareData?.[2]?.isTollFreeNumber,
          ],
          isHelper: true,
        },
        {
          name: 'Inbound and Outbound Minutes',
          moreInfo: '',
          compares: [
            compareData?.[0]?.inboundOutbound,
            compareData?.[1]?.inboundOutbound,
            compareData?.[2]?.inboundOutbound,
          ],
          isHelper: true,
        },
        {
          name: '1-1 SMS',
          moreInfo: '',
          compares: [
            compareData?.[0]?.sms,
            compareData?.[1]?.sms,
            compareData?.[2]?.sms,
          ],
          isHelper: true,
        },
        {
          name: 'Bulk and Dynamic SMS Campaigns',
          moreInfo: 'Comming soon',
          compares: [
            compareData?.[0]?.isDynamicSMS,
            compareData?.[1]?.isDynamicSMS,
            compareData?.[2]?.isDynamicSMS,
          ],
          isHelper: false,
        },
      ],
    },
  ];

  const INTERACTION = [
    {
      featureContent: 'Smart Engagement',
      compares: [
        {
          name: 'Customisable Greetings',
          moreInfo: '',
          compares: [false, true, true],
          isHelper: true,
        },
        {
          name: 'Widget Tag Directory',
          moreInfo:
            'Your customer can initiate a call simply by clicking a web link',
          compares: ['20', '50', 'Unlimited'],
          isHelper: true,
        },
        {
          name: 'Widget Staff Directory',
          moreInfo:
            'Your customer can initiate a call simply by scanning a QR code',
          compares: [false, true, true],
          isHelper: true,
        },
        {
          name: 'Mobile Chat Window',
          moreInfo: '',
          compares: [true, true, true],
          isHelper: true,
        },
        {
          name: 'Pre-chat and Post-chat Surveys',
          moreInfo:
            'Your customer can initiate a call simply by scanning a QR code',
          compares: [true, true, true],
          isHelper: true,
        },
      ],
    },
    {
      featureContent: 'Automated Chatbots',
      compares: [
        {
          name: 'Lead Qualification Bots',
          moreInfo: '',
          compares: [false, true, true],
          isHelper: true,
        },
        {
          name: 'AI-powered Answer Bots',
          moreInfo: '',
          compares: [false, true, true],
          isHelper: true,
        },
        {
          name: 'Chatbot-to-agent Transfer',
          moreInfo: '',
          compares: [false, true, true],
          isHelper: true,
        },
      ],
    },
    {
      featureContent: 'Call  Engagement',
      compares: [
        {
          name: 'Voicemail',
          moreInfo: '',
          compares: [true, true, true],
          isHelper: true,
        },
        {
          name: 'Phone as Destination',
          moreInfo: '',
          compares: [false, true, true],
          isHelper: true,
        },
        {
          name: 'Smart Calling',
          moreInfo: '',
          compares: [false, true, true],
          isHelper: true,
        },
      ],
    },
  ];

  const PLAN = [CHANNEL, INTERACTION];
  const PLAN_NAME = ['Channel', 'Interaction & engagement'];

  return (
    <div className="service-compare">
      <Grid item xs={12} className="mt--XS">
        <Typography variant="h5" className="service-name">
          CONNECT
        </Typography>
      </Grid>

      {PLAN.map((plan, index) => (
        <div key={PLAN_NAME[index]}>
          <Grid
            item
            xs={12}
            className={clsx({ 'mt--M': index }, 'mt--XXS mb--XS plan-name')}
          >
            <Typography variant="h6">{PLAN_NAME[index]}</Typography>
          </Grid>

          {plan.map((channel) => (
            <Accordion className="feature-compare" key={channel.featureContent}>
              <AccordionSummary
                expandIcon={<ArrowDropDown />}
                aria-controls="feature-compare"
              >
                <Typography className="font--16b">
                  {channel.featureContent}
                </Typography>
              </AccordionSummary>

              <div className="feature-compare-content">
                <Grid container spacing={0}>
                  {channel.compares.map((item, index) => (
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

export default React.memo(ConnectCompare);
