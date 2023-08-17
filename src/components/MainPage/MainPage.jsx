import React from "react";
import Header from "./Header/Header";
import Layout from "../Layout/Layout";
import Features from "./Features/Features";

const MainPage = () => {
  return (
    <Layout>
      <Header />
      <Features/>
    </Layout>
  );
};

export default MainPage;
