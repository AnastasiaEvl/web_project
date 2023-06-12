import React, { useState } from "react";

export default function AddAccount() {
  const [google, setGoogle] = useState("");
  const [facebook, setFacebook] = useState("");
  const [tikTok, setTikTok] = useState("");
  const [name, setName] = useState("");
  const [theme, setTheme] = useState("");
  const [site, setSite] = useState("");

  function AddAccount(google, facebook, tikTok, name, theme, site) {
    console.log(google, facebook, tikTok, name, theme, site);
  }

  return (
    <form className="addAcount" action=" " method="post" id="auth-form">
      <fieldset className="registration__section">
        <legend className="registration__title">
          <h2>Добавление аккаунта</h2>
        </legend>
        <label htmlFor="auth-email" className="registration__label"></label>
        <input
          id="auth-google"
          className="registration__input"
          type="url"
          name="google"
          placeholder="google"
          value={google}
          onChange={(e) => setGoogle(e.target.value)}
          required
        />
        <label htmlFor="auth-facebook" className="registration__label"></label>
        <input
          id="auth-facebook"
          className="registration__input"
          type="url"
          name="facebook"
          placeholder="facebook"
          value={facebook}
          onChange={(e) => setFacebook(e.target.value)}
          required
        />
        <label htmlFor="auth-tiktok" className="registration__label"></label>
        <input
          id="auth-tiktok"
          className="registration__input"
          type="url"
          name="tiktok"
          placeholder="tiktok"
          value={tikTok}
          onChange={(e) => setTikTok(e.target.value)}
          required
        />
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
        onClick={() => AddAccount(google, facebook, tikTok, name, theme, site)}
      >
        Сохранить
      </button>
    </form>
  );
}
