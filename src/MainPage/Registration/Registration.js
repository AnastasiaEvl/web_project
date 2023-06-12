import React, { useState } from "react";
import "./Registration.css";
import AuthForm from "../AuthForm/AuthForm";

export default function Registration() {
  const [email, setEmail] = useState("");
  const [password, setPassowrd] = useState("");
  const [unp, setUnp] = useState("");
  const [adress, setAdress] = useState("");
  const [phone, setPhone] = useState("");
  const [bik, setBik] = useState("");
  const [authForm, setAuthForm] = useState(false);

  const [status, setStatus] = useState(true);

  async function RegData(password, adress, unp, bik, phone, email) {
    console.log(password, adress, unp, bik, phone, email);
    fetch(`http://localhost:8080/user/registration`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        password: password,
        address: adress,
        unp: unp,
        bik: bik,
        phoneNumber: phone,
        email: email,
      }),
    })
      // .then((response) => response.json())
      .then((data) => {
        setAuthForm(true);
        setStatus(false);
      })
      .catch((error) => console.error(error));
  }

  return (
    <div>
      {status && (
        <form
          className="registration"
          action=" "
          method="post"
          id="banner-form"
        >
          <fieldset className="registration__section">
            <legend className="registration__title">
              <h2>Регистрация</h2>
            </legend>
            <label htmlFor="user-email" className="registration__label">
              email
            </label>
            <input
              id="user-email"
              className="registration__input"
              type="email"
              name="email"
              value={email}
              placeholder="Email"
              autoComplete="email"
              required
              onChange={(data) => setEmail(data.target.value)}
            />
            <label htmlFor="user-password" className="registration__label">
              password
            </label>
            <input
              id="user-password"
              className="registration__input"
              type="password"
              value={password}
              onChange={(data) => setPassowrd(data.target.value)}
              name="password"
              placeholder="Пароль"
              required
            />
            <label htmlFor="UNP" className="registration__label">
              УНП
            </label>
            <input
              id="user-unp"
              className="registration__input"
              type="number"
              name="unp"
              placeholder="УНП"
              value={unp}
              onChange={(data) => setUnp(data.target.value)}
              required
            />
            <label htmlFor="phone" className="registration__label">
              Телефон
            </label>
            <input
              id="user-phone"
              className="registration__input"
              type="tel"
              name="phone"
              value={phone}
              placeholder="Номер телефона"
              onChange={(data) => setPhone(data.target.value)}
              required
            />
            <label htmlFor="adress" className="registration__label">
              Адрес
            </label>
            <input
              id="user-adress"
              className="registration__input"
              type="text"
              name="adress"
              placeholder="Адрес"
              value={adress}
              onChange={(data) => setAdress(data.target.value)}
              required
            />
            <label htmlFor="bik" className="registration__label">
              БИК
            </label>
            <input
              id="user-bik"
              className="registration__input"
              type="number"
              name="BIK"
              placeholder="БИК"
              required
              value={bik}
              onChange={(data) => setBik(data.target.value)}
            />
          </fieldset>

          <button
            type="submit"
            className="button button--save"
            form="registration"
            onClick={() => RegData(password, adress, unp, bik, phone, email)}
          >
            Сохранить
          </button>
        </form>
      )}
      {authForm && <AuthForm />}
    </div>
  );
}
