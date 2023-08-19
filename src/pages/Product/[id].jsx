import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { allProducts } from "@/constants/products";
import { find } from "lodash";
import Layout from "@/components/Layout/Layout";
import SubPagesHeader from "@/components/Reusable/SubPagesHeader/SubPagesHeader";
import ProductDetails from "@/components/ProductDetails/ProductDetails";

const Product = () => {
  const router = useRouter();
  const [product, setProduct] = useState();
  const [error, setError] = useState();
  useEffect(() => {
    if (find(allProducts, (prod) => prod.id == router.query.id)) {
      setProduct(find(allProducts, (prod) => prod.id == router.query.id));
      setError(false);
    } else {
      setError(true);
    }
  }, [router.query.id]);
  return (
    <Layout>
      <SubPagesHeader>
        {product && <ProductDetails product={product} />}
      </SubPagesHeader>
    </Layout>
  );
};

export default Product;
