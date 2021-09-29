import * as React from "react";
import Layout from "../components/layout/Layout";
import Therapy from "../components/therapy/Therapy";

import { Helmet } from "react-helmet";

import { graphql, useStaticQuery } from "gatsby";

const ReflexologiaPage = () => {
  const data = useStaticQuery(graphql`
    query reflex {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
            }
            html
          }
        }
      }
    }
  `);

  const content = data.allMarkdownRemark.edges[2].node;
  return (
    <>
      <Helmet>
        <title>Brujalquimista | Reflexología </title>
      </Helmet>
      <Layout>
        <Therapy content={content} />
      </Layout>
    </>
  );
};

export default ReflexologiaPage;
