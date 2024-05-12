type logLevel = 'info' | 'warning' | 'error';
const createLoger = (name: string, level: logLevel) => {
  const logData = (data: unknown) => {
    console.log(`${name} -- ${level}`, {data});
  };
  return logData;
};

export const logApiData = createLoger('API_REQUEST', 'info');
export const logApiResponseData = createLoger('API_RESPONSE', 'info');
export const logApiError = createLoger('API_ERROR', 'error');
