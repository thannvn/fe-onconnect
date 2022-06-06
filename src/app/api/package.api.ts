import httpService from 'app/services/http/http.service';
import {
  CompareInfo,
  PackageInfo,
  UpgradePackageForm,
} from 'shared/const/pricing.const';

interface PackageList {
  packageList: PackageInfo[];
}

interface CompareList {
  compareList: CompareInfo[];
}

export default class PackageAPI {
  static getListPackage = () => {
    return httpService.get<PackageList>('/package/list-all');
  };

  static getCompareList = () => {
    return httpService.get<CompareList>('/package/compare');
  };

  static upgradePackage = (data: UpgradePackageForm) => {
    return httpService.post('/package/upgrade', { body: { ...data } });
  };
}
