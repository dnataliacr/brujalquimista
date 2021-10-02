import React, { useRef, useEffect, useCallback } from "react";
import "./modal.css";
export const Modal = ({ showModal, setShowModal }) => {
  return (
    <>
      {" "}
      {showModal ? (
        <div className="modal-body">
          <div>
            <form
              action="https://formsubmit.co/hola@brujalquimista.com"
              method="POST"
            >
              <label>
                {" "}
                ¡Completa el formulario y nos pondremos en contacto para agendar
                una consulta!{" "}
              </label>
              <br />
              <input type="email" placeholder="Correo electronico" />
              <br />

              <input type="name" placeholder="Nombre" name="name" required />

              <br />
              <textarea id="mensaje" name="Mensaje" rows="4" cols="50">
                Mensaje...
              </textarea>
              <input type="submit" value="enviar" />
              <br />
            </form>
          </div>
        </div>
      ) : null}{" "}
    </>
  );
};
