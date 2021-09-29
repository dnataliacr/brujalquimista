import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";

import favicon from "../../images/icon.png";

const Layout = ({ children }) => {
  const [isPreloaded, setIsPreloaded] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsPreloaded(false);
    }, 1000);
  });

  return (
    <>
      <Helmet>
        <title>Brujalquimista | Sanación holística </title>
        <link rel="icon" href={favicon} />
        <meta name="description" content="Terapias holisticas en Montevideo" />
        <meta
          name="keywords"
          content="Terapias, Holistico, Reiki, Gemoterapia, Reflexologia, Sanacion, Gemas, Cristales"
        />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
  
      <main className={isPreloaded ? "preloaded" : "loaded"}>{children}</main>
   
    </>
  );
};

export default Layout;
