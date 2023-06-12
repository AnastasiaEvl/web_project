import React from "react";
import "./ModalStatus.css";

const ModalStatus = ({ activeStatus, setActiveStatus, children }) => {
  return (
    <div className={activeStatus ? "modalStatus active" : "modalStatus"}>
      <div className={activeStatus ? "modalStatus__content" : "modalStatus"}>
        {children}
      </div>
    </div>
  );
};
export default ModalStatus;
