import * as React from "react";
import { Helmet } from "react-helmet";

import Layout from "../components/layout/Layout";
import Home from "../components/home/Home";
// markup
const IndexPage = () => {
  return (
    <>
      <Helmet>
        <title>Brujalquimista | Sanación holística </title>
      </Helmet>
      <Layout>
        <Home />
      </Layout>
    </>
  );
};

export default IndexPage;
