import React, { useState } from "react";
import "./personal.css";

export default function Person() {
  const [password, setPassword] = useState("");
  const [newPass, setNewPass] = useState("");
  const [adress, setAdress] = useState("");
  const [phone, setPhone] = useState("");
  const [bik, setBik] = useState("");

  function Personal(password, newPass, adress, phone, bik) {
    console.log(password, newPass, adress, phone, bik);
  }

  const infos = [
    { date: "10.03.2020", sum: "23456" },
    { date: "12.06.2021", sum: "23456" },
    { date: "24.02.2022", sum: "23456" },
    { date: "14.01.2022", sum: "23456" },
    { date: "12.04.2022", sum: "23456" },
    { date: "11.05.2023", sum: "23456" },
    { date: "9.08.2023", sum: "23456" },
    { date: "5.03.2023", sum: "23456" },
  ];

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
            value={adress}
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
            value={phone}
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
            value={bik}
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
          {infos.map((e, index) => (
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
