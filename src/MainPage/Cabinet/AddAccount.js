import React, { useState } from "react";

export default function AddAccount({ inf, setModalActive, modalActive }) {
  const [name, setName] = useState("");
  const [theme, setTheme] = useState("");
  const [site, setSite] = useState("");

  function AddAccount(name, theme, site) {
    fetch("http://localhost:8080/account/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        site: site,
        theme: theme,
        cabinetId: inf.id,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("ok");
        setModalActive(false);
      })
      .catch((error) => console.error(error));
  }

  return (
    <form className="addAcount" action=" " method="post" id="auth-form">
      <fieldset className="registration__section">
        <legend className="registration__title">
          <h2>Добавление аккаунта</h2>
        </legend>
        <label htmlFor="auth-name" className="registration__label"></label>
        <input
          id="auth-name"
          className="registration__input"
          type="text"
          name="name"
          placeholder="имя"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <label htmlFor="auth-theme" className="registration__label"></label>
        <input
          id="auth-theme"
          className="registration__input"
          type="text"
          name="theme"
          placeholder="тема"
          value={theme}
          onChange={(e) => setTheme(e.target.value)}
          required
        />
        <label htmlFor="auth-site" className="registration__label"></label>
        <input
          id="auth-site"
          className="registration__input"
          type="url"
          name="site"
          placeholder="сайт"
          value={site}
          onChange={(e) => setSite(e.target.value)}
          required
        />
      </fieldset>
      <button
        type="submit"
        className="button button--save"
        form="authorization"
        onClick={() => AddAccount(name, theme, site)}
      >
        Сохранить
      </button>
    </form>
  );
}
