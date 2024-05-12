export type meta = {
  message: string;
  token?: string;
};
export type dataResponse<T> = {
  data: T;
};

type serverError = {};

export type serverResponse<T> = dataResponse<T> & {
  status: number;
  meta: meta;
  errors?: serverError;
};
