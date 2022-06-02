/* eslint-disable no-return-await */
import httpService from 'app/services/http/http.service';

interface Account {
  userName: string;
  password: string;
}

interface LoginResponse {
  accessToken: string;
}

export default class LoginAPI {
  static login = async (account: Account) => {
    return await httpService.post<LoginResponse>('/login', { body: account });
  };
}
