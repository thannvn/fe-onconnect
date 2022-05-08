import { iconNames } from 'shared/icons/icon-list';

export interface PricingCardInfo {
  id: number;
  cardType: number;
  title: string;
  subtitle: string;
  monthlyPrice: number;
  yearlyPrice: number;
  summary: string;
  options: OptionInfo[];
  channels: string;
}

interface OptionInfo {
  title: string;
  description: string;
}

export const CARD_CHANNELS = {
  1: iconNames.MESSENGER_GRADIENT,
  2: iconNames.WHATS_APP,
  3: iconNames.WE_CHAT,
  4: iconNames.LINE,
  5: iconNames.CHATBOT,
  6: iconNames.EMAIL,
  7: iconNames.PHONE,
};

export const POPULAR_TYPE = 1;

export const fakeData: PricingCardInfo[] = [
  {
    id: 1,
    cardType: 0,
    title: 'Essentials',
    subtitle: 'Recommended for 1 to 10 staff',
    monthlyPrice: 20,
    yearlyPrice: 200,
    summary:
      'Engage customers across online touchpoints with rich and contextual experiences.',
    options: [
      {
        title: 'Connect',
        description:
          'Live chat & web call for sales\nMessaging across web, mobile, and social\nAccess to all channels:',
      },
      {
        title: 'Orchestrate',
        description: `Flexible routing rules\nAdvanced team structure & permissions`,
      },
      {
        title: 'Evaluate',
        description: `Live chat & web call for sales\nMessaging across web, mobile, 
          and social\nUnified omnichannel thread\nDefault email inbox`,
      },
      {
        title: 'Support',
        description: `Assigned customer success manager\n24/7 technical support`,
      },
    ],
    channels: '1,2,3,4,5',
  },
  {
    id: 2,
    cardType: 1,
    title: 'Business',
    subtitle: 'Recommended for more than 10 staff',
    monthlyPrice: 30,
    yearlyPrice: 300,
    summary: 'Automate workflows with AI bots and advanced routing at scale.',
    options: [
      {
        title: 'Connect',
        description: `Live chat & web call for sales\nMessaging across web, mobile, 
          and social\nUnified omnichannel thread\nDefault email inbox\nAccess to all channels:`,
      },
      {
        title: 'Orchestrate',
        description: `Basic routing rules\nBasic team structure & permissions`,
      },
      {
        title: 'Evaluate',
        description: `Basic dashboard statistics\nBasic reporting\n30-days conversations & reports
        \n1GB media storage/ licence\nPrebuilt integration\nBasic widget customisation\n
        Data security`,
      },
      {
        title: 'Support',
        description: `Assigned customer success manager\n24/7 technical support`,
      },
    ],
    channels: '1,2,3,4,5,6',
  },
  {
    id: 3,
    cardType: 0,
    title: 'Enterprise',
    subtitle: 'Recommended for more than 20 staff',
    monthlyPrice: 40,
    yearlyPrice: 400,
    summary: 'Unlock actionable data and analysis to accelerate your business.',
    options: [
      {
        title: 'Connect',
        description:
          'Live chat & web call for sales\nMessaging across web, mobile, and social\nAccess to all channels:',
      },
      {
        title: 'Connect',
        description: `Live chat & web call for sales\nMessaging across web, mobile, 
          and social\nUnified omnichannel thread\nDefault email inbox`,
      },
      {
        title: 'Evaluate',
        description: `Basic dashboard statistics\nBasic reporting\n30-days conversations & reports
        \n1GB media storage/ licence\nPrebuilt integration\nBasic widget customisation\n
        Data security`,
      },
      {
        title: 'Support',
        description: `Assigned customer success manager\n24/7 technical support`,
      },
    ],
    channels: '1,2,3,4,5,6,7',
  },
];
