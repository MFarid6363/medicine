import Layout from "@/components/Layout/Layout";
import SubPagesHeader from "@/components/Reusable/SubPagesHeader/SubPagesHeader";
import React from "react";
import Support from "@/components/Support/Support";

const support = () => {
  return (
    <Layout>
      <SubPagesHeader pageName="Support">
        <Support />
      </SubPagesHeader>
    </Layout>
  );
};

export default support;
