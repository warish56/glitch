import {API_PREFIX_URL} from '@common/constants/api';
import {tokenStore} from './externalStore';
import Config from 'react-native-config';
import {serverResponse} from '@common/types/response';
import {logApiData, logApiError, logApiResponseData} from './logger';

const middleware = {
  json: async <T>(res: Response) => {
    const data = await res.json();
    logApiResponseData(data);
    return {
      status: res.status,
      ...data,
    } as Promise<serverResponse<T>>;
  },
};

const createFetchFactory = () => {
  const {getValue} = tokenStore;

  type Args<T, index = 0> = T extends (u: infer a, init: infer b) => void
    ? index extends 0
      ? a
      : b
    : unknown;

  type firstArg = Args<typeof fetch>;
  type secondArg = Args<typeof fetch, 1>;

  const logRequest = (url: firstArg, options: secondArg) => {
    logApiData({
      url,
      method: options?.method,
      body: options?.body,
    });
  };

  const fetcher = async <T>(url: firstArg, options: secondArg) => {
    let token = getValue();
    const BASE_URL = Config.API_ROOT_URL;
    const newUrl = `${BASE_URL}${API_PREFIX_URL}${url}`;
    logRequest(url, options);
    return fetch(newUrl, {
      ...options,
      ...(options?.body
        ? {
            body: options.body,
          }
        : {}),
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${token}`,
      },
    })
      .then(middleware.json<T>)
      .then(response => {
        if (response.errors || response.status !== 200) {
          throw response;
        }
        return response;
      })
      .catch(err => {
        logApiError(err);
        throw err;
      });
  };

  return fetcher;
};

export const fetchData = createFetchFactory();
