export const createMockedResponse = <T>(response: T, time = 3000) => {
  return new Promise<T>(res => {
    setTimeout(() => {
      res(response);
    }, time);
  });
};
