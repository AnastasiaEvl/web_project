import React, { useState } from "react";

export default function AddBalanse({ inf, modalActive, setModalActive }) {
  const [sum, setSum] = useState("");
  const [cardNumber, setCardNumber] = useState("");

  function AddSum(sum, cardNumber) {
    console.log(sum, cardNumber);
    fetch("http://localhost:8080/user/replenish", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        sum: sum,
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
    <div>
      <form className="addBalnse" action=" " method="post" id="banner-form">
        <fieldset className="registration__section">
          <legend className="registration__title">
            <h2>Пополнение баланса</h2>
          </legend>
          <label htmlFor="user-sum" className="registration__label"></label>
          <input
            id="user-sum"
            className="registration__input"
            type="number"
            name="sum"
            value={sum}
            placeholder="Введите сумму"
            required
            onChange={(data) => setSum(data.target.value)}
          />
          <label htmlFor="user-card" className="registration__label"></label>
          <input
            id="user-card"
            className="registration__input"
            type="number"
            value={cardNumber}
            onChange={(data) => setCardNumber(data.target.value)}
            name="cardNumber"
            placeholder="Введите номер карты"
            required
          />
        </fieldset>
        <button
          type="submit"
          className="button button--save"
          form="addBalnse"
          onClick={() => AddSum(sum, cardNumber)}
        >
          Сохранить
        </button>
      </form>
    </div>
  );
}
