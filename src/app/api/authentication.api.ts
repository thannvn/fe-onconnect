import httpService from 'app/services/http/http.service';
import { UserForm, UserInfo } from 'shared/const/user.const';

interface LoginResponse {
  data: {
    accessToken: string;
    user: UserInfo;
  };
  message: string;
  status: number;
}

export default class AuthenticationAPI {
  static registerFree = (data: UserForm) => {
    return httpService.post('/auth/register', {
      body: data,
    });
  };

  static login = (email: string, password: string) => {
    return httpService.post<LoginResponse>('/auth/login', {
      body: {
        email,
        password,
      },
    });
  };
}
