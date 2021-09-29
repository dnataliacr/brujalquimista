import React from "react";
import { Link } from "gatsby";
import "./therapies.css";

const Therapies = () => {
  return (
    <div className="therapies-body">
      <div className="therapies-container">
        <Link to="/reiki">
          <div className="therapies-card">
            <div className="therapies-box reiki">
              <div className="therapies-content">
                <h2>Reiki</h2>
                <p>energía del universo a través de las manos </p>
              </div>
            </div>
          </div>
        </Link>
        <Link to="/gemoterapia">
          <div className="therapies-card">
            <div className="therapies-box gemoterapia">
              <div className="therapies-content">
                <h2>Gemoterapia</h2>
                <p>sanación con piedras y cristales</p>
              </div>
            </div>
          </div>
        </Link>
        <Link to="/reflexologia">
          <div className="therapies-card">
            <div className="therapies-box reflexologia">
              <div className="therapies-content">
                <h2>Reflexología</h2>
                <p>aplicación de presión en zonas reflejas</p>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Therapies;
