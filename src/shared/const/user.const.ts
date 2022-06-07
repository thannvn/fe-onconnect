import { PackageInfo } from './pricing.const';

export enum Role {
  USER = 'user',
  ADMIN = 'admin',
}

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

export interface Profile extends UserInfo {
  Package: PackageInfo;
}

export interface UserInfo extends UserForm {
  id: number;
  role: string;
  createdDate: string;
}

export const ACCESS_TOKEN = 'access_token';
export const REFRESH_TOKEN = 'refresh_token';
