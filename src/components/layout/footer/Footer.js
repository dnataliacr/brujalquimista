import React from "react";

import { FaWhatsapp } from "react-icons/fa";
import { FcLike } from "react-icons/fc";
import "./footer.css";

const Footer = () => {
  return (
    <section className="footer">
       <div style={{fontSize: '1.2rem', textAlign: 'center', padding: '20px 20px'}}>SITIO EN CONSTRUCCIÓN</div>
      <div className="footer-content">
        <div className="footer-text">
          <p>Centro de sanación holística | Montevideo</p>{" "}
          <a
            href="mailto:hola@brujalquimista.com"
            target="_blank"
            rel="noreferrer"
          >
            hola@brujalquimista.com
          </a>{" "}
          <a
            href="https://wa.me/59896229395?text=Hola!%20quisiera%20recibir%20mas%20informacion"
            target="_blank"
            rel="noreferrer"
          >
            <FaWhatsapp className="whatsapp" />
          </a>
        </div>
        <div className="footer-map">
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3273.119804388755!2d-56.26351468476296!3d-34.87833778038929!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a1d59025020c39%3A0xf0d1a622932eeb24!2sBerna%202189%2C%2012800%20Montevideo%2C%20Departamento%20de%20Montevideo!5e0!3m2!1sen!2suy!4v1630712436143!5m2!1sen!2suy"
          />
        </div>
      </div>
      <div>Nuestras terapias no sustituyen bajo ningún concepto indicaciones médicas</div>
      <span>
        Copyright 2021 | made with <FcLike className="footer__heart" /> by{" "}
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
