import * as React from "react";
import { Helmet } from "react-helmet";

import logo from '../images/gitlogo.png'
// markup
const LogoPage = () => {
  return (
    <>
      <Helmet>
        <title>Brujalquimista | Sanación holística </title>
      </Helmet>
    <div><img src={logo} /></div>
    </>
  );
};

export default LogoPage;
