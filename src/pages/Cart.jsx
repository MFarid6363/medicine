import Layout from "@/components/Layout/Layout";
import SubPagesHeader from "@/components/Reusable/SubPagesHeader/SubPagesHeader";
import React, { useEffect } from "react";
import Page from "@/components/CartContainer/CartContainer";
import useUser from "@/providers/userProvider";
import ls from "local-storage";
import { lsBusket } from "@/constants/localStorage";
const Cart = () => {
  const { goodsList, setGoodsList } = useUser();
  useEffect(() => {
  }, []);
  return (
    <Layout>
      <SubPagesHeader pageName="Cart"></SubPagesHeader>
      <Page prod={goodsList} setProducts={setGoodsList} />
    </Layout>
  );
};

export default Cart;
