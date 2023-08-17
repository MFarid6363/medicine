import React from "react";
import styles from "./styles.module.css";
import { BiMap } from "react-icons/bi";
import { TbRefresh } from "react-icons/tb";
import { AiOutlineLock } from "react-icons/ai";
import { MdPeopleOutline } from "react-icons/md";
const Features = () => {
  return (
    <div className={styles.Container}>
      <div className={styles.Feature}>
        <i>
          <BiMap />
        </i>
        <div>
          <span className={styles.Title}>Free delivery</span>
          <span className={styles.Description}>For all orders</span>
        </div>
      </div>
      <div className={styles.Feature}>
        <i>
          <TbRefresh />
        </i>
        <div>
          <span className={styles.Title}>60 Days Return</span>
          <span className={styles.Description}>100% Satisfaction</span>
          <span className={styles.Description}>Guaranted</span>
        </div>
      </div>
      <div className={styles.Feature}>
        <i>
          <AiOutlineLock />
        </i>
        <div>
          <span className={styles.Title}>Secure Payment</span>
          <span className={styles.Description}>100% safe payment</span>
        </div>
      </div>
      <div className={styles.Feature}>
        <i>
          <MdPeopleOutline />
        </i>
        <div>
          <span className={styles.Title}>24/7 Support</span>
          <span className={styles.Description}>Dedicated support</span>
        </div>
      </div>
    </div>
  );
};

export default Features;
