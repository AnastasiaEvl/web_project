import React, { useState } from "react";

export default function AuthForm(props) {
  const [emailAuth, setEmailAuth] = useState("");
  const [passAuth, setPassAuth] = useState("");
  const [redirect, setRedirect] = useState(false);

  async function Auth(emailAuth, passAuth) {
    console.log(emailAuth, passAuth);
    fetch(`http://localhost:8080/user/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: emailAuth,
        password: passAuth,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        // setToken(data.token);
        console.log(data);
        setRedirect(true);
      })
      .catch((error) => console.error(error));
  }

  if (redirect) {
    window.location = "/cabinet";
  }

  return (
    <form className="authorization" action=" " method="post" id="auth-form">
      <fieldset className="registration__section">
        <legend className="registration__title">
          <h2>Вход</h2>
        </legend>
        <label htmlFor="auth-email" className="registration__label">
          email
        </label>
        <input
          id="auth-email"
          className="registration__input"
          type="email"
          name="email"
          placeholder="Email"
          autoComplete="email"
          value={emailAuth}
          onChange={(e) => setEmailAuth(e.target.value)}
          required
        />
        <label htmlFor="auth-password" className="registration__label">
          password
        </label>
        <input
          id="auth-password"
          className="registration__input"
          type="password"
          name="password"
          placeholder="Пароль"
          value={passAuth}
          onChange={(e) => setPassAuth(e.target.value)}
          required
        />
      </fieldset>
      <button
        type="submit"
        className="button button--save"
        form="authorization"
        onClick={() => Auth(emailAuth, passAuth)}
      >
        Сохранить
      </button>
    </form>
  );
}
