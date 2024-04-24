import {appTokenData} from './token';

const middleware = {
  json: (res: Response) => res.json(),
};

const createFetchFactory = () => {
  const {getToken} = appTokenData;

  const fetcher: typeof fetch = async (...args) => {
    let token = await getToken();
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
