import React from "react";
import styles from "./styles.module.css";
import map from "lodash/map";
import Product from "@/components/Product/Product";
import { allProducts } from "@/constants/products";
import { find } from "lodash";

const Compilation = ({ productsId, title,description }) => {
  return (
    <>
      <h3 className={styles.title}>{title}</h3>
      {description && <span className={styles.description}>{description}</span>}
      <div className={styles.containter}>
        {map(
          productsId,
          (id) =>
            find(allProducts, (e) => e.id == id) && (
              <Product product={find(allProducts, (e) => e.id == id)} />
            )
        )}
      </div>
    </>
  );
};

export default Compilation;
