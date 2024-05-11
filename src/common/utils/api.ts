import {tokenStore} from './externalStore';

const middleware = {
  json: <T>(res: Response) => res.json() as Promise<T>,
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

  const fetcher = async <T>(url: firstArg, options: secondArg) => {
    let token = getValue();
    return fetch(url, {
      ...options,
      ...(options?.body ? {body: JSON.stringify(options.body)} : {}),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }).then(middleware.json<T>);
  };

  return fetcher;
};

export const fetchData = createFetchFactory();
