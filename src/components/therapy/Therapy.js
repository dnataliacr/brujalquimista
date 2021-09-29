import React from "react";
import "./terapy.css";

const Therapy = ({ content }) => {
  return (
    <div className="therapy-body">
      <div className="therapy-img" />
      <div className="therapy-container">
        <h1>{content.frontmatter.title}</h1>

        <div
          dangerouslySetInnerHTML={{ __html: content.html }}
          className="therapy-text"
        />
        <hr />
      </div>
    </div>
  );
};

export default Therapy;
