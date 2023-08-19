import React from "react";
import Header from "./Header/Header";
import Layout from "../Layout/Layout";
import Features from "./Features/Features";
import Categories from "./Categories/Categories";
import Compilation from "./Compilation/Compilation";
import styles from "./styles.module.css";

const MainPage = () => {
  return (
    <Layout>
      <Header />
      <Features />
      <Compilation title={"Bestsellers"} productsId={[1, 2, 3, 4]} />
      <Categories />
      <Compilation
        description={
          "We are happy to offer highly absorbable natural products for your good health."
        }
        title={"Recommended for You"}
        productsId={[1, 2, 3, 4]}
      />
      <div className={styles.btnContainer}>
        <a
          href="/shop"
          className={`${styles.allProductBtn} ${styles.button} ${styles.type1}`}
        >
          All products
        </a>
      </div>
    </Layout>
  );
};

export default MainPage;
