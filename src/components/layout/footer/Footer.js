import React from "react";

import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { FcLike } from "react-icons/fc";
import "./footer.css";

const Footer = () => {
  return (
    <section className="footer">
      <div className="footer-content">
        <div className="footer-text">
          <p>Centro de sanación holística</p> <p>Montevideo</p>{" "}
          <a
            href="mailto:hola@brujalquimista.com"
            target="_blank"
            rel="noreferrer"
          >
            hola@brujalquimista.com
          </a>{" "}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <a
              href="https://wa.me/59896229395?text=Hola!%20quisiera%20recibir%20mas%20informacion"
              target="_blank"
              rel="noreferrer"
            >
              <FaWhatsapp className="whatsapp" />
            </a>
            <a
              href="https://www.instagram.com/brujalquimista.uy/"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram
                className="whatsapp"
                style={{ marginLeft: "50px" }}
              />
            </a>
          </div>
        </div>
        <div className="footer-map">
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1636.010911758981!2d-56.193213957672064!3d-34.90590183837953!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xbd081d75cc76aff3!2sGaler%C3%ADas%20Delondon!5e0!3m2!1sen!2suy!4v1633396829043!5m2!1sen!2suy"
          />
        </div>
      </div>
      <div style={{ padding: "10px", textAlign: "center" }}>
        Nuestras terapias no sustituyen bajo ningún concepto indicaciones
        médicas
      </div>
      <span>
        Copyright 2021 | made by{" "}
        <a
          href="https://www.nataliacabral.com"
          target="_blank"
          rel="noreferrer"
        >
          nataliacabral.com
        </a>
      </span>
    </section>
  );
};

export default Footer;
