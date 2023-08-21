import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Layout from "@/components/Layout/Layout";
import SubPagesHeader from "@/components/Reusable/SubPagesHeader/SubPagesHeader";
import ProductList from "@/components/Reusable/ProductList/ProductList";
import { categories } from "@/constants/categories";
import { cloneDeep, filter, find, includes, map } from "lodash";
import { allProducts } from "@/constants/products";

const Categories = () => {
  const router = useRouter();
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);
  useEffect(() => {
    if (
      router.query.id &&
      find(categories, (item) => item.id == router?.query?.id)
    ) {
      let updated = cloneDeep(
        find(categories, (item) => item.id == router?.query?.id)
      );
      setCategory(updated);
      let updatedProducts = cloneDeep(
        filter(allProducts, (item) => includes(updated.goodsId, item.id))
      );
      setProducts(updatedProducts);
    }
  }, [router?.query?.id]);
  categories;
  return (
    <Layout>
      <SubPagesHeader>
        <ProductList products={products} />
      </SubPagesHeader>
    </Layout>
  );
};

export default Categories;
