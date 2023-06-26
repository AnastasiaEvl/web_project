import React from "react";
import "./ModalTwo.css";

const ModalTwo = ({ activeTwo, setActive, children }) => {
  return (
    <div className={activeTwo ? "modalTwo activeTwo" : "modalTwo"}>
      <div className={activeTwo ? "modal__contentTwo" : "modalTwo"}>
        {children}
      </div>
    </div>
  );
};
export default ModalTwo;
