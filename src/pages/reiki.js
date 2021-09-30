import * as React from "react";
import Layout from "../components/layout/Layout";
import Therapy from "../components/therapy/Therapy";

import { Helmet } from "react-helmet";

import { graphql, useStaticQuery } from "gatsby";

const ReikiPage = () => {
  const data = useStaticQuery(graphql`
    query reiki {
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
        <title>Brujalquimista | Reiki </title>
      </Helmet>
      <Layout>
        <Therapy content={content} />
      </Layout>
    </>
  );
};

export default ReikiPage;
