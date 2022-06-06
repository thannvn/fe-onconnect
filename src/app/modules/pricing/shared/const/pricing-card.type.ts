import { iconNames } from 'shared/icons/icon-list';

interface Option {
  title: string;
  description: string;
}

export interface PackageInfo {
  id: number;
  title: string;
  subtitle: string;
  value: string;
  type: number;
  monthlyPricing: number;
  yearlyPricing: number;
  summary: string;
  options: Option[];
  channels: string;
}

export interface CompareInfo {
  id: number;
  packageId: number;
  isWebsiteLiveChat: boolean;
  isChatCallLink: boolean;
  isChatCallQR: boolean;
  isWhatsApp: boolean;
  email: string;
  isLocalNumber: boolean;
  isTollFreeNumber: boolean;
  inboundOutbound: string;
  sms: boolean;
  isDynamicSMS: boolean;
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
