import {tokenStore} from './externalStore';

const middleware = {
  json: (res: Response) => res.json(),
};

const createFetchFactory = () => {
  const {getValue} = tokenStore;

  const fetcher: typeof fetch = async (...args) => {
    let token = getValue();
    return fetch(args[0], {
      ...args[1],
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }).then(middleware.json);
  };

  return fetcher;
};

export const fetchData = createFetchFactory();
