import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import ls from "local-storage";
import useUser from "@/providers/userProvider";
import { getCurrency } from "@/helpers/getCurrency";

const Product = ({ product }) => {
  const { currency } = useUser();
  return (
    <div className={styles.Container}>
      <a href={`Product/${product.id}`}>
        <Image
          width={225}
          height={300}
          src={product.imgSrc}
          alt="product image"
        />
      </a>
      <span className={styles.name}>{product.name}</span>
      <span className={styles.price}>
        {product.price[currency]} {getCurrency(currency)}
      </span>
      <span className={styles.showMore}>Show More</span>
    </div>
  );
};

export default Product;
