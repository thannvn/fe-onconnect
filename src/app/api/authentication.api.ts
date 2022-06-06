import httpService from 'app/services/http/http.service';
import { Profile, UserForm, UserInfo } from 'shared/const/user.const';

interface LoginResponse {
  accessToken: string;
  user: UserInfo;
  message: string;
}

interface ProfileResponse {
  profile: Profile;
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

  static changePassword = (currentPassword: string, newPassword: string) => {
    return httpService.post('/auth/change-password', {
      body: {
        currentPassword,
        newPassword,
      },
    });
  };

  static getProfile = () => {
    return httpService.get<ProfileResponse>('/auth/profile');
  };
}
