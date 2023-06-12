import React from "react";
import "./Modal.css";

const Modal = ({ active, setActive, children }) => {
  return (
    <div className={active ? "modal active" : "modal"}>
      <div className={active ? "modal__content" : "modal"}>{children}</div>
    </div>
  );
};
export default Modal;
