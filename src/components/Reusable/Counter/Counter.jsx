import React from "react";
import styles from "./styles.module.css";
import { FiPlus, FiMinus } from "react-icons/fi";

const Counter = ({ count, setCount, onClick }) => {
  return (
    <div className={styles.Container}>
      <div className={styles.Counter}>
        <span
          className={styles.Icon}
          onClick={() =>
            setCount((prev) => {
              if (prev > 1) return prev - 1;
              return prev;
            })
          }
        >
          <FiMinus/>
        </span>
        <span>{count}</span>
        <span
          className={styles.Icon}
          onClick={() => setCount((prev) => prev + 1)}
        >
          <FiPlus/>
        </span>
      </div>
      <button onClick={onClick}>Add to cart</button>
    </div>
  );
};

export default Counter;
