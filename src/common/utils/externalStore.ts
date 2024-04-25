type listenerFunc<T> = (value: T) => void;

const createExternalStore = <T>(store: T) => {
  const listeners = new Set<listenerFunc<T>>();

  const subscribe = (callback: listenerFunc<T>) => {
    listeners.add(callback);
    return () => {
      listeners.delete(callback);
    };
  };

  const getValue = () => {
    return store;
  };

  const invokeListeners = () => {
    [...listeners].forEach(callback => {
      callback(getValue());
    });
  };

  const setValue = (data: T) => {
    store = {...data};
    invokeListeners();
  };

  return {
    setValue,
    getValue,
    subscribe,
  };
};

export const tokenStore = createExternalStore({value: ''});
