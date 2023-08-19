import React from "react";
import Layout from "@/components/Layout/Layout";
import SubPagesHeader from "@/components/Reusable/SubPagesHeader/SubPagesHeader";
import Privacy from "@/components/Privacy/Privacy";

const PrivacyStatement = () => {
  return (
    <Layout>
      <SubPagesHeader pageName="Privacy Statement">
        <Privacy />
      </SubPagesHeader>
    </Layout>
  );
};

export default PrivacyStatement;
