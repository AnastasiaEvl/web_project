import React, { useState } from "react";

export default function AddMoney({ element, money, setMoney, inf }) {
  const [summ, setSumm] = useState("");

  function AddMoneys(summ) {
    console.log(summ);
    fetch("http://localhost:8080/account/replenish", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        sum: summ,
        cabinetId: inf.id,
        adAccountId: money,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("ok");
      })
      .catch((error) => console.error(error));
  }
  function Cancel() {
    window.location.reload();
  }

  return (
    <div>
      <form className="addBalnse" action=" " method="post" id="banner-form">
        <fieldset className="registration__section">
          <legend className="registration__title">
            <h2>Пополнение баланса</h2>
          </legend>
          <label htmlFor="sum" className="registration__label"></label>
          <input
            id="sum"
            className="registration__input"
            type="number"
            name="sum"
            value={summ}
            placeholder="Введите сумму"
            required
            onChange={(data) => setSumm(data.target.value)}
          />
        </fieldset>
        <button
          type="submit"
          className="button button--save"
          form="addBalnse"
          onClick={() => AddMoneys(summ)}
        >
          Сохранить
        </button>
        <button
          type="cancel"
          className="button button--save"
          form="addBalnse"
          onClick={() => Cancel()}
        >
          Отмена
        </button>
      </form>
    </div>
  );
}
