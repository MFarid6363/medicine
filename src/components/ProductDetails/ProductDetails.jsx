import React, { useState } from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import useUser from "@/providers/userProvider";
import { cloneDeep, find, isArray, map, replace, slice } from "lodash";
import { getCurrency } from "@/helpers/getCurrency";
import { bootleSize, getSelectedOption } from "@/constants/ProductOptions";
import ls from "local-storage";
import Counter from "../Reusable/Counter/Counter";
import Compilation from "../MainPage/Compilation/Compilation";
import BasicAlerts from "../Reusable/Alert/Alert";
import { lsBusket } from "@/constants/localStorage";
import push from "lodash/_arrayPush";
import { formatGoodsList } from "@/helpers/formatGoodsList";

const ProductDetails = ({ product }) => {
  const { currency, setGoodsList } = useUser();
  const [option, setOption] = useState();
  const [count, setCount] = useState(1);
  const [alert, setAlert] = useState("");
  const [alertMsg, setAlertMsg] = useState("");

  const handleAddToCart = () => {
    if (!option) {
      setAlert("error");
      setAlertMsg(
        "Please select some product options before adding this product to your cart."
      );
    } else {
      const productCopy = {
        id: product.id,
        image: product.imgSrc,
        name: product.name,
        option: getSelectedOption(option),
        price: product.price,
        quantity: count,
      };
      formatGoodsList(setGoodsList, productCopy);
      setAlert("success");
      setAlertMsg("Product succesfully added to cart");
      // var names = ls.get("names");
      // console.log(names);
      // names[0] = prompt("New member name?");
      // localStorage.setItem("names", JSON.stringify(names));

      //...
      // var storedNames = JSON.parse(localStorage.getItem("names"));
      // {
      //   image: "https://via.placeholder.com/200x150",
      //   name: "PRODUCT ITEM NUMBER 1",
      //   description: "Description for product item number 1",
      //   price: 5.99,
      //   quantity: 2,
      // }
    }
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
          <select
            className={styles.Select}
            onChange={(e) => setOption(e.target.value)}
            value={option}
          >
            <option value={""}>Choose an option</option>
            {map(bootleSize, (item) => {
              if (find(product.optionsId, (option) => option == item.id)) {
                return (
                  <option value={item.priceMultiplication}>{item.name}</option>
                );
              }
            })}
          </select>
          {option && (
            <span className={styles.calculatedPrice}>
              {(
                product.price[currency] *
                getSelectedOption(option).priceMultiplication
              ).toFixed(2)}{" "}
              {getCurrency(currency)}
            </span>
          )}
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
      <BasicAlerts alertMsg={alertMsg} type={alert} setAlert={setAlert} />
    </div>
  );
};

export default ProductDetails;
