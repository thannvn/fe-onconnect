import {
  CompareInfo,
  PackageInfo,
} from 'app/modules/pricing/shared/const/pricing-card.type';
import httpService from 'app/services/http/http.service';

interface PackageList {
  packageList: PackageInfo[];
}

interface CompareList {
  compareList: CompareInfo[];
}

export default class PricingAPI {
  static getListPackage = () => {
    return httpService.get<PackageList>('/package/list-all');
  };

  static getCompareList = () => {
    return httpService.get<CompareList>('/package/compare');
  };
}
