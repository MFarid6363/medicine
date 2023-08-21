import React from "react";
import Header from "./Header/Header";
import Layout from "../Layout/Layout";
import Features from "./Features/Features";
import Categories from "./Categories/Categories";
import Compilation from "./Compilation/Compilation";
import styles from "./styles.module.css";
import Link from "next/link";

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
        <Link className={`${styles.allProductBtn} ${styles.button} ${styles.type1}`} href="/shop">
            All products
        </Link>
      </div>
    </Layout>
  );
};

export default MainPage;
