import React, { useState } from "react";
import { Link } from "gatsby";

import logo from "../../../images/logo.png";
import "./header.css";

import { Modal } from "./Modal";
const Header = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal((prev) => !prev);
    console.log(showModal);
  };
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
            <Link to="/nosotras" className="header-link">
              {" "}
              nosotras
            </Link>
          </li>
          <li
            className="header-link"
            style={{ color: "#000" }}
            onClick={openModal}
          >
            ¡agendate!{" "}
          </li>
        </ul>
      </nav>
      <Modal showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
};

export default Header;
