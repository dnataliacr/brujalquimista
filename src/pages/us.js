import * as React from "react";
import { Helmet } from "react-helmet";

import Layout from "../components/layout/Layout";
import Us from "../components/us/Us";

// markup
const UsPage = () => {
  return (
    <>
      <Helmet>
        <title>Brujalquimista | Nosotras</title>
      </Helmet>
      <Layout>
  <Us/>
      </Layout>
    </>
  );
};

export default UsPage;
