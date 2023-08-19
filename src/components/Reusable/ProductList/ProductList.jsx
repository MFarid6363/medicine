import React from "react";
import map from "lodash/map";
import Product from "@/components/Product/Product";
import styles from "./styles.module.css";

const ProductList = ({ products }) => {
  return (
    <div className={styles.Container}>
        <span>{`Showing all ${products.length} results`}</span>
      <div className={styles.ProductList}>
        {map(products, (product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
