export interface UserForm {
  phoneNumber: string;
  firstName: string;
  lastName: string;
  packageId: number | string;
  switchboardName: string;
  language: string;
  companyName: string;
  email: string;
  companyRegion: string;
  phoneCode?: number;
}

export interface UserInfo extends UserForm {
  id: number;
  role: string;
}

export const ACCESS_TOKEN = 'access_token';
export const REFRESH_TOKEN = 'refresh_token';
