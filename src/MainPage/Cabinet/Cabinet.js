import React, { useState } from "react";
import "./Cabinet.css";
import Modal from "../Modal/Modal";
import AddAccount from "./AddAccount";
import AddBalanse from "./AddBalanse";
import Person from "./Person";

const TabContent = ({ title, content, first, second }) => (
  <div className="tabcontent">
    <table className="table">
      <thead>
        <tr>
          <th colSpan="5">{title}</th>
        </tr>
      </thead>
      {first && (
        <tbody>
          {content.map((e, index) => (
            <tr key={index}>
              <td>{e.logo}</td>
              <td>{e.name}</td>
              <td>{e.balance}</td>
              <td id="visibility">
                <button onClick={() => Add(e.id)}>+</button>
              </td>
              <td>
                <button onClick={() => Minus(e.id)}>-</button>
              </td>
            </tr>
          ))}
        </tbody>
      )}
      {second && (
        <tbody>
          {content.map((e, index) => (
            <tr key={index}>
              <td>{e.logo}</td>
              <td>{e.name}</td>
              <td>{e.balance}</td>
              <td>{e.comments}</td>
            </tr>
          ))}
        </tbody>
      )}
    </table>
  </div>
);

function Add(e) {
  console.log(e);
}
function Minus(e) {
  console.log(e);
}

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
  const [first, setFirst] = useState(true);
  const [second, setSecond] = useState(false);
  const openTab = (e) => (
    setActive(+e.target.dataset.index), setTable(true), setPersonalArea(false)
  );

  function Change(e) {
    if (+e.target.dataset.index === 0) {
      setFirst(true);
      setSecond(false);
    } else {
      setFirst(false);
      setSecond(true);
    }
  }

  const money = { profileBalanse: "123$" };

  const items = [
    {
      title: "Аккаунт",
      content: [
        {
          id: 1,
          logo: "dvp",
          name: "Advertising",
          balance: "123455",
        },
        {
          id: 2,
          logo: "dvp",
          name: "Advertising",
          balance: "123455",
        },
        {
          id: 3,
          logo: "ppp",
          name: "Reklama",
          balance: "66666",
        },
        {
          id: 4,
          logo: "tbn",
          name: "ClientSoft",
          balance: "788",
        },
        {
          id: 5,
          logo: "dvp",
          name: "First",
          balance: "9999",
        },
        {
          id: 6,
          logo: "dvp",
          name: "SpecialRate",
          balance: "243",
        },
        {
          id: 7,
          logo: "dvp",
          name: "Ind",
          balance: "45434",
        },
        {
          id: 8,
          logo: "dvp",
          name: "Five",
          balance: "44432",
          plus: "+",
          minus: "-",
        },
        {
          id: 9,
          logo: "dvp",
          name: "Valley",
          balance: "56766",
        },
        {
          id: 10,
          logo: "dvp",
          name: "Golden",
          balance: "432",
        },
        {
          id: 11,
          logo: "dvp",
          name: "Lsst",
          balance: "3242q",
        },
      ],
    },
    {
      title: "История",
      content: [
        {
          logo: "account number",
          name: "date",
          balance: "1111",
          comments: "comments",
        },
        {
          logo: "account number",
          name: "date",
          balance: "3222",
          comments: "comments",
        },
        {
          logo: "account number",
          name: "date",
          balance: "321321",
          comments: "comments",
        },
        {
          logo: "account number",
          name: "date",
          balance: "312432",
          comments: "comments",
        },
        {
          logo: "account number",
          name: "date",
          balance: "11434311",
          comments: "comments",
        },
        {
          logo: "account number",
          name: "date",
          balance: "1113241",
          comments: "comments",
        },
        {
          logo: "account number",
          name: "date",
          balance: "11432311",
          comments: "comments",
        },
        {
          logo: "account number",
          name: "date",
          balance: "11122111",
          comments: "comments",
        },
      ],
    },
  ];

  function addMoney() {
    setAddAccount(false);
    setModalActive(true);
    setAddBalanse(true);
  }
  function addAcc() {
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
                onClick={(e) => {
                  openTab(e);
                  Change(e);
                }}
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
          {items[active] && table && (
            <TabContent first={first} second={second} {...items[active]} />
          )}
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
