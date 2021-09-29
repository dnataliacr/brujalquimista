import * as React from "react";
import Layout from "../components/layout/Layout";

import { Helmet } from "react-helmet";

import Therapy from "../components/therapy/Therapy";

import { graphql, useStaticQuery } from "gatsby";


const GemoterapiaPage = () => {
  const data = useStaticQuery(graphql`
  query MyQuery {
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

const content = data.allMarkdownRemark.edges[1].node

  return (
    <>
      <Helmet>
        <title>Brujalquimista | Gemoterapia</title>
      </Helmet>
      <Layout> 
        <Therapy content={content}/>
      </Layout>
    </>
  );
};

export default GemoterapiaPage;
