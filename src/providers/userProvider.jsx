import { createContext, useContext, useMemo, useState } from 'react';

const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [refresh,setRefresh] = useState(false)
  
  /* add ucun */
  return (
    <UserContext.Provider
      value={{
        refresh,setRefresh
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default function useUser() {
  return useContext(UserContext);
}
