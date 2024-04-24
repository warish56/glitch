import {appTokenData} from '@common/utils/token';
import {useEffect, useState} from 'react';

export const useToken = () => {
  const [appToken, setAppToken] = useState<string | null>(null);

  useEffect(() => {
    const onChnage = (token: string) => {
      setAppToken(token);
    };

    const removeListener = appTokenData.onTokenChange(onChnage);
    return () => {
      removeListener();
    };
  }, []);

  const setToken = (value: string) => {
    appTokenData.setToken(value);
  };

  return {
    appToken,
    setToken,
  };
};
