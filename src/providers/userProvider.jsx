import { createContext, useContext, useMemo, useState } from "react";
import ls from 'local-storage'
import { lsBusket } from "@/constants/localStorage";
import { formatGoodsList } from "@/helpers/formatGoodsList";

const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [refresh, setRefresh] = useState(false);
  const [currency, setCurrency] = useState(1);
  const [goodsList, setGoodsList] = useState([]);


  /* add ucun */
  return (
    <UserContext.Provider
      value={{
        refresh,
        setRefresh,
        currency,
        setCurrency,
        goodsList,
        setGoodsList,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default function useUser() {
  return useContext(UserContext);
}
