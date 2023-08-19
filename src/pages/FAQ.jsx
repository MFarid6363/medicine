import Layout from "@/components/Layout/Layout";
import SubPagesHeader from "@/components/Reusable/SubPagesHeader/SubPagesHeader";
import React from "react";
import Faq from '../components/FAQ/Faq.jsx'

const FAQ = () => {
  return (
    <Layout>
      <SubPagesHeader pageName="FAQ" pagePath="">
        <Faq/>
      </SubPagesHeader>
    </Layout>
  );
};

export default FAQ;
