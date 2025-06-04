import axios, {
  AxiosResponse,
  AxiosError,
  AxiosInstance,
  AxiosPromise,
  AxiosRequestConfig,
} from 'axios';
import Qs from 'qs';
import { TYPE_COOKIE } from './constants';
import { objectType } from 'types';
import { getCookie } from './cookies';
import { notify } from 'reapop';
import { tricklingProgress } from './progressRouter';
import { store } from 'store/configureStore';

const onSuccessInterceptorRequest = async (config: AxiosRequestConfig) => {
  if (config.method !== 'GET') tricklingProgress.start();
  const token = await getCookie(TYPE_COOKIE.TOKEN);
  if (token) config.headers['Authorization'] = `Bearer ${token}`;
  config.paramsSerializer = (params: any) =>
    Qs.stringify(params, {
      arrayFormat: 'brackets',
    });
  return config;
};
const onErrorInterceptorRequest = (error: AxiosError) => Promise.reject(error);

let notif;

const onErrorInterceptorResponse = (error: AxiosError) => {
  if (error.response && error.response.status) {
    if (
      error.response.status === 401 &&
      !error.response.config?.url?.includes('logout')
    ) {
      store.dispatch(
        notify(error.response.statusText, 'error', {
          message: 'Need permission. Please login.',
          title: 'Oops',
          dismissAfter: 5000,
        }),
      );
      // store.dispatch(LOGOUT());
    } else {
      const message =
        typeof error.response?.data === 'string'
          ? error.response?.data
          : typeof error.response?.data?.msg === 'string'
          ? error.response?.data.msg
          : typeof error.response?.data?.errors === 'string'
          ? error.response?.data?.errors
          : typeof error.response?.data?.errors?.msg === 'string'
          ? error.response?.data?.errors?.msg
          : error.response?.data?.errors.length
          ? error.response?.data?.errors[0]?.msg
          : '';
      store.dispatch(
        notify('error', {
          message,
          title: 'Oops',
          dismissAfter: 5000,
        }),
      );
    }
  }
  tricklingProgress.done();
  return Promise.reject(error);
};
const onSuccessInterceptorResponse = (response: AxiosResponse) => {
  if (
    response.status === 200 &&
    response.config.method !== 'get' &&
    !response.config.url?.includes('auth')
  ) {
    if (!notif) {
      // notif = store.dispatch(
      //   notify('The changes has been saved.', 'success', {
      //     title: 'Success',
      //     dismissAfter: 2000,
      //   }),
      // );

      setTimeout(() => {
        notif = null;
      }, 2000);
    }
  }
  tricklingProgress.done();
  return response;
};

axios.defaults.headers.post['Accept'] = 'application/json';

const _axios: AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL || '',
  timeout: 120 * 1000,
  // withCredentials: true, // Check cross-site Access-Control
});

_axios.interceptors.request.use(
  onSuccessInterceptorRequest,
  onErrorInterceptorRequest,
);

_axios.interceptors.response.use(
  onSuccessInterceptorResponse,
  onErrorInterceptorResponse,
);

/**
 *
 * @NOTE primary methods axios
 *
 */
class AxiosXHRConstructor {
  axiosInstance: AxiosInstance;
  constructor(axiosInstance: AxiosInstance) {
    this.axiosInstance = axiosInstance;
    this.$get = this.$get.bind(this);
    this.$post = this.$post.bind(this);
    this.$put = this.$put.bind(this);
    this.$delete = this.$delete.bind(this);
  }
  public $get(
    url: string,
    params?: objectType,
    config?: objectType,
  ): AxiosPromise {
    return this.axiosInstance.get(url, {
      ...{ params },
      ...config,
    });
  }
  public $post(
    url: string,
    data?: objectType,
    config?: objectType,
  ): AxiosPromise {
    return this.axiosInstance.post(url, data, config);
  }
  public $put(
    url: string,
    data?: objectType,
    config?: objectType,
  ): AxiosPromise {
    return this.axiosInstance.put(url, data, config);
  }
  public $delete(url: string, data?: objectType): AxiosPromise {
    // return this.axiosInstance.delete(url, {
    //   data,
    // });

    /**
     * @hotfix {https://github.com/axios/axios/issues/3220}
     */
    return this.axiosInstance.request({
      method: 'delete',
      url,
      data,
    });
  }
}

export const BaseXHR = new AxiosXHRConstructor(_axios);

export default _axios;
