type style = Record<string, string | number>;
export type serverStyle = undefined | style | null;

namespace FilterListT {
  export type WrapperStyle = {
    style?: serverStyle;
  };

  export type BtnStyle = {
    style?: serverStyle;
    activeStyle?: serverStyle;
  };

  export type TextStyle = {
    style?: serverStyle;
    activeStyle?: serverStyle;
  };
}

namespace TabsGroupT {
  export type WrapperStyle = {
    style?: serverStyle;
  };

  export type BtnStyle = {
    style?: serverStyle;
    activeStyle?: serverStyle;
  };

  export type TextStyle = {
    style?: serverStyle;
    activeStyle?: serverStyle;
  };
}

export type componentsStyleData = {
  data: {
    filterList: {
      wrapper: FilterListT.WrapperStyle;
      btn: FilterListT.BtnStyle;
      text: FilterListT.TextStyle;
    };
    tabsGroup: {
      wrapper: TabsGroupT.WrapperStyle;
      btn: TabsGroupT.BtnStyle;
      text: TabsGroupT.TextStyle;
    };
  };
};
export type styleDataResponse = Promise<componentsStyleData>;
