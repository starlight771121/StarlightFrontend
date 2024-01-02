import { createContext, useContext, useState } from 'react';

const PageContext = createContext();

export const PageProvider = ({ children }) => {
  const [activePage, setActivePage] = useState('/'); // Set the default active page to '/'

  const setPage = (page) => {
    setActivePage(page);
  };

  return (
    <PageContext.Provider value={{ activePage, setPage }}>
      {children}
    </PageContext.Provider>
  );
};

export const usePage = () => {
  return useContext(PageContext);
};
