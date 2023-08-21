import React, { useEffect } from "react";
import Image from "next/image";

import ls from "local-storage";

import { currencies } from "@/constants/currencies";

import { find, map } from "lodash";
import useUser from "@/providers/userProvider";
import HeadImg from "../../../../public/images/Header.jpeg";
import Logo from "../../../../public/images/daily-herbals-logo.png";
import { PiHandbagLight } from "react-icons/pi";
import { BsSearch } from "react-icons/bs";
import styles from "./styles.module.css";
import { lsCurrency } from "@/constants/localStorage";
import { formatGoodsList } from "@/helpers/formatGoodsList";
const Header = () => {
  const {
    refresh,
    setRefresh,
    currency,
    goodsList,
    setCurrency,
    setGoodsList,
  } = useUser();
  useEffect(() => {
    // console.log(find(currencies, (e) => e.id == ls.get("cur")) || 1);
  }, [refresh]);

  const handleCurrencyChange = (value) => {
    ls.set(lsCurrency, value);
    setCurrency(value);
    setRefresh((prev) => !prev);
  };

  useEffect(() => {
    formatGoodsList(setGoodsList);
    if (ls?.get(lsCurrency)) {
      setCurrency(ls.get(lsCurrency));
    }
  }, []);
  return (
    <div className={styles.ImgContainer}>
      <Image height={500} src={HeadImg} />
      <div className={styles.Navigation}>
        <div className={styles.logoSide}>
          <Image src={Logo} />
          <div>
            <a href="/shop">Shop</a>
            <a href="/FAQ">FAQ</a>
            <a href="/support">Support</a>
          </div>
        </div>
        <div className={styles.cartSide}>
          <select
            value={find(currencies, (e) => e.id == ls.get(lsCurrency))?.id || 1}
            onChange={(event) => handleCurrencyChange(event.target.value)}
          >
            {map(currencies, (currency) => (
              <option value={currency.id}>{currency.text}</option>
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
    </div>
  );
};

export default Header;
