import React, { useState, useEffect } from 'react';

import GetGenders from '../services/GetGenders';

export const GlobalContext = React.createContext({});

const GlobalContextProvider = ({ children }) => {
  const [genders, setGenders] = useState([]);

  useEffect(() => {
    GetGenders().then((res) => {
      setGenders(res);
    });
    return () => {};
  }, []);

  return (
    <GlobalContext.Provider value={{ genders }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
