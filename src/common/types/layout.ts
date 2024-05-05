export type layout = {
  id: string;
  type: 'layout';
  direction: 'row' | 'column';
  style: Record<string, string | number>;
  children: Array<layout | button | image | chip | text | tabs>;
  scrollDirection?: 'horizontal' | 'vertical';
};

export type button = {
  id: string;
  type: 'button';
  title: string;
  style: Record<string, string | number>;
  textStyle: Record<string, string | number>;
};

export type image = {
  id: string;
  type: 'image';
  style: Record<string, string | number>;
  url: string;
};

export type chip = {
  id: string;
  type: 'chip';
  title: string;
  textStyle: Record<string, string | number>;
  style: Record<string, string | number>;
};

export type text = {
  id: string;
  type: 'text';
  title: string;
  style: Record<string, string | number>;
};

export type tab = {
  id: string;
  style: Record<string, string | number>;
  title: string;
  activeStyle: Record<string, string | number>;
  textStyle: Record<string, string | number>;
};

export type tabs = {
  id: string;
  type: 'tabs';
  list: tab[];
  defaultSelectedTabId: string;
  style: Record<string, string | number>;
};
