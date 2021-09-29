import React from "react";
import { Link } from "gatsby";

import logo from "../../../images/logo.png";
import "./header.css";

const Header = () => {
  return (
    <div className="header-body">
      <nav>
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <ul className="header-ul">
          <li>
            <Link to="/reiki" className="header-link">
              {" "}
              reiki{" "}
            </Link>
          </li>
          <li>
            <Link to="/reflexologia" className="header-link">
              {" "}
              reflexología{" "}
            </Link>
          </li>
          <li>
            <Link to="/gemoterapia" className="header-link">
              {" "}
              gemoterapia
            </Link>
          </li>
          <li>
            <Link
              to="/contacto"
              className="header-link"
              style={{ color: "#000" }}
            >
              ¡agendate!{" "}
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
