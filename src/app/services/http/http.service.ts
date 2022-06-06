import axios, { AxiosRequestHeaders, Method } from 'axios';
import addToast from 'shared/blocks/toastify/add-toast.component';
import { Message } from 'shared/const/message.const';
import { ACCESS_TOKEN } from 'shared/const/user.const';
import { store } from 'store';
import { logout } from '../redux/slices/user-slice';
import StorageService from '../storage';
import { HttpMethod, HttpOptions } from './http.type';

export class HttpService {
  private commonHeader = {
    Accept: 'application/json',
    'Cache-Control': 'no-cache no-store',
    Pragma: 'no-cache',
    Expires: 0,
    'Access-Control-Allow-Origin': '*',
  };

  private instance = axios.create({
    timeout: 300000,
  });

  constructor() {
    this.configInterceptor();
  }

  public get<T>(uri: string, options?: HttpOptions): Promise<T | undefined> {
    return this.request(uri, HttpMethod.GET, options);
  }

  public post<T>(uri: string, options?: HttpOptions): Promise<T | undefined> {
    return this.request(uri, HttpMethod.POST, options);
  }

  public put<T>(uri: string, options?: HttpOptions): Promise<T | undefined> {
    return this.request(uri, HttpMethod.PUT, options);
  }

  public delete<T>(uri: string, options?: HttpOptions): Promise<T | undefined> {
    return this.request(uri, HttpMethod.DELETE, options);
  }

  public async request<T>(
    uri: string,
    method: Method,
    options?: HttpOptions
  ): Promise<T | undefined> {
    const url = this.resolve(uri);

    try {
      const response = await this.instance.request({
        url,
        method,
        data: options?.body,
        params: options?.queryParams,
        headers: this.generateHeader(options?.headers),
      });

      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw error;
      } else {
        throw new Error(Message.COMMON_ERROR);
      }
    }
  }

  private generateHeader = (
    header?: AxiosRequestHeaders
  ): AxiosRequestHeaders => {
    const token = StorageService.get(ACCESS_TOKEN);

    return {
      ...this.commonHeader,
      ...header,
      token: token || '',
    };
  };

  private configInterceptor = () => {
    this.instance.interceptors.response.use(
      (res) => {
        return res;
      },
      (err) => {
        const { status, data } = err.response;

        if (status === 401 && !window.location.pathname.includes('login')) {
          addToast({ message: Message.LOGIN_AGAIN, type: 'error' });
          store.dispatch(logout());
          window.location.href = '/login';
        } else {
          addToast({
            message: data?.message || Message.COMMON_ERROR,
            type: 'error',
          });
        }

        throw err;
      }
    );
  };

  // eslint-disable-next-line class-methods-use-this
  private resolve = (uri: string): string => {
    if (/^(http|https):\/\/.+$/.test(uri)) {
      return uri;
    }
    return `${process.env.REACT_APP_BASE_API_URL}${uri}`;
  };
}

export default new HttpService();
