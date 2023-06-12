import React, { useState } from "react";
import "./Cabinet.css";
import Modal from "../Modal/Modal";
import AddAccount from "./AddAccount";
import AddBalanse from "./AddBalanse";
import Person from "./Person";

const TabContent = ({ title, content }) => (
  <div className="tabcontent">
    <table className="table">
      <thead>
        <tr>
          <th colSpan="5">{title}</th>
        </tr>
      </thead>
      <tbody>
        {content.map((e, index) => (
          <tr key={index}>
            <td>{e.logo}</td>
            <td>{e.name}</td>
            <td>{e.balance}</td>
            <td>{e.plus}</td>
            <td>{e.minus}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const PersonArea = () => (
  <div className="personal">
    <Person></Person>
  </div>
);

export default function Cabinet() {
  const [modalActive, setModalActive] = useState(false);
  const [table, setTable] = useState(true);
  const [active, setActive] = React.useState(0);
  const [addBalanse, setAddBalanse] = useState(false);
  const [addAccount, setAddAccount] = useState(false);
  const [personalArea, setPersonalArea] = useState(false);
  const openTab = (e) => (
    setActive(+e.target.dataset.index), setTable(true), setPersonalArea(false)
  );

  const money = { profileBalanse: "123$" };

  const items = [
    {
      title: "Аккаунт",
      content: [
        {
          logo: "dvp",
          name: "Advertising",
          balance: "123455",
          plus: "+",
          minus: "-",
        },
        {
          logo: "dvp",
          name: "Advertising",
          balance: "123455",
          plus: "+",
          minus: "-",
        },
        {
          logo: "ppp",
          name: "Reklama",
          balance: "66666",
          plus: "+",
          minus: "-",
        },
        {
          logo: "tbn",
          name: "ClientSoft",
          balance: "788",
          plus: "+",
          minus: "-",
        },
        { logo: "dvp", name: "First", balance: "9999", plus: "+", minus: "-" },
        {
          logo: "dvp",
          name: "SpecialRate",
          balance: "243",
          plus: "+",
          minus: "-",
        },
        { logo: "dvp", name: "Ind", balance: "45434", plus: "+", minus: "-" },
        { logo: "dvp", name: "Five", balance: "44432", plus: "+", minus: "-" },
        {
          logo: "dvp",
          name: "Valley",
          balance: "56766",
          plus: "+",
          minus: "-",
        },
        { logo: "dvp", name: "Golden", balance: "432", plus: "+", minus: "-" },
        { logo: "dvp", name: "Lsst", balance: "3242q", plus: "+", minus: "-" },
      ],
    },
    {
      title: "История",
      content: [
        {
          logo: "account number",
          name: "date",
          balance: "1111",
          plus: "comments",
        },
        {
          logo: "account number",
          name: "date",
          balance: "3222",
          plus: "comments",
        },
        {
          logo: "account number",
          name: "date",
          balance: "321321",
          plus: "comments",
        },
        {
          logo: "account number",
          name: "date",
          balance: "312432",
          plus: "comments",
        },
        {
          logo: "account number",
          name: "date",
          balance: "11434311",
          plus: "comments",
        },
        {
          logo: "account number",
          name: "date",
          balance: "1113241",
          plus: "comments",
        },
        {
          logo: "account number",
          name: "date",
          balance: "11432311",
          plus: "comments",
        },
        {
          logo: "account number",
          name: "date",
          balance: "11122111",
          plus: "comments",
        },
      ],
    },
  ];

  function addMoney() {
    console.log("ok");
    setAddAccount(false);
    setModalActive(true);
    setAddBalanse(true);
  }
  function addAcc() {
    console.log("OK");
    setAddBalanse(false);
    setModalActive(true);
    setAddAccount(true);
  }
  function PersonalArea() {
    setPersonalArea(true);
    setTable(false);
  }

  return (
    <div className="wrapper">
      <section className="cabinet">
        <header className="cabinet__header">
          <h2>NAME</h2>
          <p>
            Баланс пользователя:<span>{money.profileBalanse}</span>
          </p>
          <button className="button button--cancel" onClick={() => addMoney()}>
            Пополнить счет
          </button>
          <button className="button button--save" onClick={() => addAcc()}>
            Добавить аккаунт
          </button>
          <button className="button button--cancel">Выход</button>
        </header>

        <div className="cabinet__main">
          <div className="tab">
            {items.map((n, i) => (
              <button
                className={`button ${i === active ? "active" : ""}`}
                onClick={openTab}
                data-index={i}
              >
                {n.title}
              </button>
            ))}

            <button
              className="button cabinet-style"
              onClick={() => PersonalArea()}
            >
              Кабинет
            </button>
          </div>
          {items[active] && table && <TabContent {...items[active]} />}
          {personalArea && <PersonArea></PersonArea>}
        </div>

        <Modal active={modalActive} setActive={setModalActive}>
          {addBalanse && <AddBalanse />}
          {addAccount && <AddAccount />}
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
    </div>
  );
}
