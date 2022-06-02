/* eslint-disable no-unused-vars */
import { AxiosRequestHeaders, AxiosResponseHeaders } from 'axios';

export enum HttpStatus {
  SUCCESS = 200,
  UNAUTHORIZED = 401,
  BAD_REQUEST = 400,
}

export interface HttpResponse<T> {
  message?: string;
  data: T;
  status: number;
  header?: AxiosResponseHeaders;
}

export enum HttpMethod {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

export interface HttpOptions {
  queryParams?: Record<
    string,
    string | number | boolean | string[] | number[] | boolean[] | undefined
  >;
  body?: unknown | FormData;
  headers?: AxiosRequestHeaders;
}
