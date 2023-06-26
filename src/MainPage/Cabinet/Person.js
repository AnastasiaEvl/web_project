import React, { useState, useEffect } from "react";
import "./personal.css";

export default function Person({ inf, history }) {
  const [password, setPassword] = useState("");
  const [newPass, setNewPass] = useState("");
  const [adress, setAdress] = useState("");
  const [phone, setPhone] = useState("");
  const [bik, setBik] = useState("");
  const [personal, setPersonal] = useState([]);

  function Personal(password, newPass, adress, phone, bik) {
    console.log(password, newPass, adress, phone, bik);
  }

  return (
    <div className="personal__wrapper">
      <form className="authorization" action=" " method="post" id="personal">
        <fieldset className="registration__section">
          <legend className="registration__title">
            <h2>Личный кабинет</h2>
          </legend>
          <label
            htmlFor="personal__pass"
            className="registration__label"
          ></label>
          <input
            id="personal__pass"
            className="registration__input"
            type="password"
            name="password"
            placeholder="Пароль"
            autoComplete="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <label htmlFor="new-pass" className="registration__label"></label>
          <input
            id="new-pass"
            className="registration__input"
            type="password"
            name="password"
            placeholder="Новый пароль"
            value={newPass}
            onChange={(e) => setNewPass(e.target.value)}
            required
          />
          <label htmlFor="adress" className="registration__label"></label>
          <input
            id="adress"
            className="registration__input"
            type="text"
            name="adress"
            placeholder="Адрес"
            value={inf.address}
            onChange={(e) => setAdress(e.target.value)}
            required
          />
          <label htmlFor="phone" className="registration__label"></label>
          <input
            id="phone"
            className="registration__input"
            type="tel"
            name="phone"
            placeholder="Телефон"
            value={inf.phoneNumber}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
          <label htmlFor="bik" className="registration__label"></label>
          <input
            id="bik"
            className="registration__input"
            type="number"
            name="bik"
            placeholder="БИК"
            value={inf.bik}
            onChange={(e) => setBik(e.target.value)}
            required
          />
        </fieldset>
        <button
          type="submit"
          className="button button--save"
          form="authorization"
          onClick={() => Personal(password, newPass, adress, phone, bik)}
        >
          Сохранить
        </button>
      </form>
      <table className="personal__table">
        <thead>
          <tr>
            <td>Дата</td>
            <td>Сумма</td>
          </tr>
        </thead>
        <tbody>
          {history.map((e, index) => (
            <tr key={index}>
              <td>{e.date}</td>
              <td>{e.sum}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
