import React, { useState } from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import useUser from "@/providers/userProvider";
import { find, map } from "lodash";
import { getCurrency } from "@/helpers/getCurrency";
import { bootleSize } from "@/constants/ProductOptions";
import Counter from "../Reusable/Counter/Counter";
import Compilation from "../MainPage/Compilation/Compilation";

const ProductDetails = ({ product }) => {
  const { currency } = useUser();
  const [option, setOption] = useState();
  const [count, setCount] = useState(0);

  const handleAddToCart = () => {
    console.log("bura");
  };

  return (
    <div className={styles.MainContainer}>
      <div className={styles.Container}>
        <div>
          <Image src={product.imgSrc} width={300} height={400} />
        </div>
        <div className={styles.Details}>
          <span className={styles.name}>{product.name}</span>
          <span className={styles.price}>{`${
            product.price[currency]
          } ${getCurrency(currency)}`}</span>
          <ul className={styles.characteristics}>
            {map(product.characteristics, (characteristic) => (
              <li>{characteristic}</li>
            ))}
          </ul>
          <span className={styles.productExtraInfo}>{product.extraInfo}</span>
          <select className={styles.Select} value={option}>
            <option>Choose an option</option>
            {map(bootleSize, (item) => {
              if (find(product.optionsId, (option) => option == item.id)) {
                return (
                  <option value={item.priceMultiplication}>{item.name}</option>
                );
              }
            })}
          </select>
          <Counter
            setCount={setCount}
            count={count}
            onClick={handleAddToCart}
          />
        </div>
      </div>
      {product.description && (
        <div className={styles.description}>
          <span>Description</span>
          <p>{product.description}</p>
        </div>
      )}
      <Compilation
        title={"Related products"}
        productsId={product.relatedProductsId}
      />
    </div>
  );
};

export default ProductDetails;
