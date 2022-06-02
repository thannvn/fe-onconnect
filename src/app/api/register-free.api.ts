import httpService from 'app/services/http/http.service';
import { UserForm, UserInfo } from 'shared/const/user.const';

export default class RegisterFreeAPI {
  static registerFree = (data: UserForm) => {
    return httpService.post<UserInfo>('/register-free', {
      body: data,
    });
  };
}
