import { createContext, useContext, useMemo, useState } from "react";

const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [refresh, setRefresh] = useState(false);
  const [currency, setCurrency] = useState(1);

  /* add ucun */
  return (
    <UserContext.Provider
      value={{
        refresh,
        setRefresh,
        currency,
        setCurrency,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default function useUser() {
  return useContext(UserContext);
}
