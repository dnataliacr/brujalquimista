import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import "./us.css";


import img1 from '../../assets/us.png'
import ph1 from '../../assets/ph1.jpg'
import ph2 from '../../assets/ph2.jpg'
const Us = () => {
  const data = useStaticQuery(graphql`
  query us {
    allMarkdownRemark {
      edges {
        node {
          html
        }
      }
    }
  }
  `)
  const content = data.allMarkdownRemark.edges
  console.log(content)
  return  <div className="us-body">
  <h1>Sobre nosotras</h1>
  <div className="us-intro" style={{ display: "flex" }}>
    <div>
      <img src={img1}  />
    </div>
    <div>
    <div
          dangerouslySetInnerHTML={{ __html: content[5].node.html }}
       
        />
    </div>
  </div>
  <div className="boxes" style={{ display: "flex" }}>
    <div className="box">
      <img src={ph1} alt="imagen" />
      <h2>Patricia Jaureguiberry</h2>
      <h3>Reikista</h3>
      <div
          dangerouslySetInnerHTML={{ __html: content[3].node.html }}
       
        />
    </div>
    <div className="box">
      <img src={ph2} alt="imagen" />
      <h2>Corina Pejo</h2>
      <h3>Reflexologa y masajista</h3>
      <div
          dangerouslySetInnerHTML={{ __html: content[1].node.html }}
       
        />
    </div>
  </div>
</div>
};


export default Us