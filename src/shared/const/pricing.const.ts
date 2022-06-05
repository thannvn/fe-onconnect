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

export interface UpgradePackageForm {
  phoneNumber: string;
  firstName: string;
  lastName: string;
  packageName: number | string;
  companyName: string;
  email: string;
  companyRegion: string;
  message: string;
}
