import CheckoutContainer from "@/components/Checkout/Checkout";
import Layout from "@/components/Layout/Layout";
import SubPagesHeader from "@/components/Reusable/SubPagesHeader/SubPagesHeader";
import React from "react";

const Checkout = () => {
  return (
    <Layout>
      <SubPagesHeader>
        <CheckoutContainer />
      </SubPagesHeader>
    </Layout>
  );
};

export default Checkout;
