import * as React from "react";
import { Helmet } from "react-helmet";

import Layout from "../components/layout/Layout";

// markup
const IndexPage = () => {
  return (
    <>
      <Helmet>
        <title>Brujalquimista | Sanación holística </title>
      </Helmet>
      <Layout />
    </>
  );
};

export default IndexPage;
