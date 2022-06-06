import httpService from 'app/services/http/http.service';
import {
  CompareInfo,
  PackageInfo,
  PackageOption,
  UpgradePackageForm,
} from 'shared/const/pricing.const';

interface PackageList {
  packageList: PackageInfo[];
}

interface PackageOptionList {
  optionList: PackageOption[];
}

interface CompareList {
  compareList: CompareInfo[];
}

export default class PackageAPI {
  static getPackageList = () => {
    return httpService.get<PackageList>('/package/list-all');
  };

  static getOptionList = () => {
    return httpService.get<PackageOptionList>('/package/option-list');
  };

  static getCompareList = () => {
    return httpService.get<CompareList>('/package/compare');
  };

  static upgradePackage = (data: UpgradePackageForm) => {
    return httpService.post('/package/upgrade', { body: { ...data } });
  };
}
