import React, { useEffect } from "react";
import Image from "next/image";
import styles from "./styles.module.css";
import Logo from "../../../../public/images/daily-herbals-logo.png";
import { PiHandbagLight } from "react-icons/pi";
import { BsSearch } from "react-icons/bs";
import useUser from "@/providers/userProvider";
import ls from "local-storage";
import { useRouter } from "next/router";

import { currencies } from "@/constants/currencies";

import { find, map } from "lodash";
import { lsCurrency } from "@/constants/localStorage";
import { formatGoodsList } from "@/helpers/formatGoodsList";

const SubPagesHeader = ({ pageName, pagePath, children }) => {
  const router = useRouter();
  const { setRefresh, setCurrency, setGoodsList, goodsList } = useUser();

  const handleCurrencyChange = (value) => {
    ls.set(lsCurrency, value);
    setCurrency(value);
    setRefresh((prev) => !prev);
  };

  useEffect(() => {
    formatGoodsList(setGoodsList);
    if(ls?.get(lsCurrency)){
      setCurrency(ls.get(lsCurrency))
    }
  }, []);

  return (
    <div>
      <div className={styles.Navigation}>
        <div className={styles.logoSide}>
          <a href="/">
            <Image src={Logo} />
          </a>
          <div>
            <a
              className={router.asPath == "/shop" ? styles.selected : "˝"}
              href="/shop"
            >
              Shop
            </a>
            <a
              className={router.asPath == "/FAQ" ? styles.selected : "˝"}
              href="/FAQ"
            >
              FAQ
            </a>
            <a
              className={router.asPath == "/support" ? styles.selected : "˝"}
              href="/support"
            >
              Support
            </a>
          </div>
        </div>
        <div className={styles.cartSide}>
          <select
            value={find(currencies, (e) => e.id == ls.get(lsCurrency))?.id || 1}
            onChange={(event) => handleCurrencyChange(event.target.value)}
          >
            {map(currencies, (currency) => (
              <option key={currency.id} value={currency.id}>
                {currency.text}
              </option>
            ))}
          </select>
          <a href="/Cart">
            <i>
              <PiHandbagLight />
              <span>({goodsList.length})</span>
            </i>
          </a>
          {/* <i>
            <BsSearch />
          </i> */}
        </div>
      </div>
      <div className={styles.PageDescription}>
        <p>{pagePath}</p>
        <p className={styles.pageName}>{pageName}</p>
      </div>
      {children}
    </div>
  );
};

export default SubPagesHeader;
