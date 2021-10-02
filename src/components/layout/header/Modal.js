import React, { useRef, useEffect, useCallback, useState } from "react";
import "./modal.css";
export const Modal = ({ showModal, setShowModal }) => {
    const modalRef = useRef();


  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && showModal) {
        setShowModal(false);
      }
    },
    [setShowModal, showModal]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);

  return (
    <>
      {" "}
      {showModal ? (
        <div className="modal-body" ref={modalRef} onClick={closeModal}>
          <div className="form-container">
            <form
              action="https://formsubmit.co/hola@brujalquimista.com"
              method="POST"
            >
              <label>
                {" "}
                Completa el formulario y nos pondremos en contacto para agendar
                una consulta{" "}
              </label>
              <br />
              <input type="email" placeholder="Correo electronico" />
              <br />

              <input type="name" placeholder="Nombre" name="name" required />

              <br />
              <textarea id="mensaje" name="Mensaje" rows="4" cols="50"  >

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
