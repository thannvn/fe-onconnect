import httpService from 'app/services/http/http.service';
import { Profile } from 'shared/const/user.const';

interface UserListResponse {
  userList: Profile[];
}

export default class AdminAPI {
  static getAllUser = () => {
    return httpService.get<UserListResponse>('/auth/user-list');
  };

  static warningExpiredDate = (userId: number) => {
    return httpService.post('/auth/warning-expired-date', {
      body: { userId: userId.toString() },
    });
  };
}
