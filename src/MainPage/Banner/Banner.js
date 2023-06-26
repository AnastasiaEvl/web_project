import React, { useState } from "react";
import "./banner.css";
import Modal from "../Modal/Modal";
import Registration from "../Registration/Registration";
import AuthForm from "../AuthForm/AuthForm";

export default function Banner(props) {
  const buttons = [{ name: "Регистрация" }, { name: "Авторизация" }];
  const [modalActive, setModalActive] = useState(false);
  const [register, setRegister] = useState(false);
  const [auth, setAuth] = useState(false);

  function Reg(index) {
    console.log(index);
    switch (index) {
      case 0:
        setModalActive(true);
        setRegister(true);
        setAuth(false);
        break;
      case 1:
        setModalActive(true);
        setAuth(true);
        setRegister(false);
        break;
    }
  }
  return (
    <section className="banner">
      <div className="banner__box">
        <h2 className="banner__title">
          Запускайте рекламу комфортно и быстро без блокировок
        </h2>
        <p className="banner__content">
          AD — автоматизированный сервис для работы с рекламными бюджетами для
          малых, средних и крупных рекламодателей
        </p>
      </div>
      <div className="banner__buttons">
        {buttons.map((n, index) => (
          <div key={index}>
            <button className="button button--reg" onClick={() => Reg(index)}>
              {n.name}
            </button>
          </div>
        ))}
      </div>
      <Modal active={modalActive} setActive={setModalActive}>
        {register && <Registration />}
        {auth && <AuthForm />}
        <section className="buttons-block">
          <button
            className="button button--cancel"
            onClick={() => setModalActive(false)}
            type="reset"
          >
            Отмена
          </button>
        </section>
      </Modal>
    </section>
  );
}
