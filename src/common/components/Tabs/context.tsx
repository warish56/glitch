import React, {useContext, useState} from 'react';

export const TabsContext = React.createContext({
  currentTabId: '',
  setTab: (_id: string) => {
    return;
  },
});

type props = {
  children: React.ReactNode;
  defaultId: string;
};

export const useTabContext = () => {
  return useContext(TabsContext);
};

export const TabsProvider = ({children, defaultId}: props) => {
  const [currentTabId, setCurrentTabId] = useState(defaultId || '');

  const setTab = (id: string) => {
    setCurrentTabId(id);
  };

  const value = {
    currentTabId,
    setTab,
  };
  return <TabsContext.Provider value={value}>{children}</TabsContext.Provider>;
};
