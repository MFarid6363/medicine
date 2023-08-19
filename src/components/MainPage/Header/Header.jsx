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
const Header = () => {
  const { refresh, setRefresh,currency,setCurrency } = useUser();
  useEffect(() => {
    // console.log(find(currencies, (e) => e.id == ls.get("cur")) || 1);
  }, [refresh]);

  const handleCurrencyChange = (value) => {
    ls.set("cur", value);
    setCurrency(value)
    setRefresh((prev) => !prev);
  };
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
            value={find(currencies, (e) => e.id == ls.get("cur"))?.id || 1}
            onChange={(event) => handleCurrencyChange(event.target.value)}
          >
            {map(currencies, (currency) => (
              <option value={currency.id}>{currency.text}</option>
            ))}
          </select>
          <i>
            <PiHandbagLight />
            <span>2</span>
          </i>
          <BsSearch />
        </div>
      </div>
    </div>
  );
};

export default Header;
