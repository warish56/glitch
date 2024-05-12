import {dataResponse} from './response';

export type tag = {
  title: string;
  id: string;
};

type ExpoUser = {
  id: string;
  url: string;
  tags: tag[];
  title: string;
  description: string;
};

export type expo = {
  tags: tag[];
  list: ExpoUser[];
};

export type expoResponse = Promise<dataResponse<expo>>;
