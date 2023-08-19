import TermsUse from "@/components/TermsUse/TermsUse";
import React from "react";
import Layout from "@/components/Layout/Layout";
import SubPagesHeader from "@/components/Reusable/SubPagesHeader/SubPagesHeader";

const TermsOfUse = () => {
  return (
    <Layout>
      <SubPagesHeader pageName="Terms Of Use">
        <TermsUse />
      </SubPagesHeader>
    </Layout>
  );
};

export default TermsOfUse;
