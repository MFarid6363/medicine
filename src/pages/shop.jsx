import Layout from "@/components/Layout/Layout";
import ProductList from "@/components/Reusable/ProductList/ProductList";
import SubPagesHeader from "@/components/Reusable/SubPagesHeader/SubPagesHeader";
import { allProducts } from "@/constants/products";
import React from "react";

const Shop = () => {
  return (
    <Layout>
      <SubPagesHeader pageName="Shop" pagePath="Home / Shop">
        <ProductList products={allProducts} />
      </SubPagesHeader>
    </Layout>
  );
};

export default Shop;
