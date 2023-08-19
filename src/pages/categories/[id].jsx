import React from "react";
import { useRouter } from "next/router";
import Layout from "@/components/Layout/Layout";
import SubPagesHeader from "@/components/Reusable/SubPagesHeader/SubPagesHeader";

const Categories = () => {
  const router = useRouter();
  return (
    <Layout>
      <SubPagesHeader>
        <div>
          <p>{router.query.id}</p>
          buraaa
        </div>
      </SubPagesHeader>
    </Layout>
  );
};

export default Categories;
