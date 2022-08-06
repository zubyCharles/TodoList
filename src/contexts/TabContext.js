import { createContext, useContext, useState } from 'react';

const TabContext = createContext();

export const useTabContext = () => useContext(TabContext);

const Tab = ({ children }) => {
  const [activeTab, setActiveTab] = useState('all');

  return (
    <TabContext.Provider value={{ activeTab, changeTab: setActiveTab }}>
      {children}
    </TabContext.Provider>
  );
};

export default Tab;
