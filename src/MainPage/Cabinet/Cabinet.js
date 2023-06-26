import React, { useState, useEffect } from "react";
import "./Cabinet.css";
import Modal from "../Modal/Modal";
import AddAccount from "./AddAccount";
import AddBalanse from "./AddBalanse";
import Person from "./Person";
import AddMoney from "./AddMoney";
import ModalTwo from "../Modal/ModalTwo";

export default function Cabinet({ ident }) {
  const [modalActive, setModalActive] = useState(false);
  const [modalActiveTwo, setModalActiveTwo] = useState(false);
  const [table, setTable] = useState(true);
  const [active, setActive] = React.useState(0);
  const [addBalanse, setAddBalanse] = useState(false);
  const [addAccount, setAddAccount] = useState(false);
  const [personalArea, setPersonalArea] = useState(false);
  const [first, setFirst] = useState(true);
  const [second, setSecond] = useState(false);
  const [history, setHistory] = useState([]);
  const [redirectMain, setRedirectMain] = useState(false);
  const [datas, setData] = useState([]);
  const [inf, setInf] = useState("");
  const [accounts, setAccounts] = useState([]);
  const [element, setElement] = useState("");
  const [money, setMoney] = useState("");
  const [mon, setMon] = useState(false);

  useEffect(() => {
    CabinetInf();
    getAccounts();
  }, []);

  function CabinetInf() {
    fetch(`http://localhost:8080/user/login/` + 1, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setInf(data);
      })
      .catch((error) => console.error(error));
  }
  function getAccounts() {
    fetch(`http://localhost:8080/account/all/` + 1, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setAccounts(data);
      })
      .catch((error) => console.error(error));
  }

  const openTab = (e) => (
    setActive(+e.target.dataset.index), setTable(true), setPersonalArea(false)
  );

  function Exit() {
    fetch(`http://localhost:8080/user/logout/` + 1, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setRedirectMain(true);
      })
      .catch((error) => console.error(error));
  }

  if (redirectMain) {
    window.location = "/";
  }

  function Change(e) {
    if (+e.target.dataset.index === 0) {
      setFirst(true);
      setSecond(false);
      console.log(ident);
      getAccounts();
    } else {
      setFirst(false);
      setSecond(true);
      console.log(ident);
      getHistory();
    }
  }

  function getHistory() {
    fetch("http://localhost:8080/history/account/all/" + 1, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setHistory(data);
        console.log(data);
      })
      .catch((error) => console.error(error));
  }

  const items = [
    {
      title: "Аккаунт",
    },
    {
      title: "История",
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
          <h2>AD</h2>
          <p>
            <span>
              Баланс пользователя: <p>{inf.balance}</p>
            </span>
          </p>
          <button className="button button--cancel" onClick={() => addMoney()}>
            Пополнить счет
          </button>
          <button className="button button--save" onClick={() => addAcc()}>
            Добавить аккаунт
          </button>
          <button className="button button--cancel" onClick={() => Exit()}>
            Выход
          </button>
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
            <TabContent
              first={first}
              datas={datas}
              second={second}
              history={history}
              accounts={accounts}
              money={money}
              mon={mon}
              setMoney={setMoney}
              setModalActiveTwo={setModalActiveTwo}
              inf={inf}
              {...items[active]}
            />
          )}
          {personalArea && (
            <PersonArea inf={inf} history={history}></PersonArea>
          )}
        </div>

        <Modal active={modalActive} setActive={setModalActive}>
          {addBalanse && (
            <AddBalanse
              modalActive={modalActive}
              setModalActive={setModalActive}
              inf={inf}
            />
          )}

          {addAccount && (
            <AddAccount
              modalActive={modalActive}
              setModalActive={setModalActive}
              inf={inf}
            />
          )}

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

const TabContent = ({
  title,
  first,
  second,
  history,
  accounts,
  modalActive,
  setModalActive,
  money,
  mon,
  setMoney,
  setMon,
  setElement,
  setModalActiveTwo,
  element,
  modalActiveTwo,
  inf,
}) => (
  <div className="tabcontent">
    <table className="table">
      <thead>
        <tr>
          <th colSpan="5">{title}</th>
        </tr>
      </thead>
      {first && (
        <tbody>
          <tr>
            <th>Номер</th>
            <th>Имя аккаунта</th>
            <th>Баланс</th>
            <th>Пополнить баланс</th>
          </tr>
          {accounts.map((e, index) => (
            <tr key={index}>
              <td>{e.id}</td>
              <td>{e.name}</td>
              <td>{e.balance}</td>
              <td id="visibility">
                <button onClick={() => Add(e.id)}>+</button>
              </td>
            </tr>
          ))}
        </tbody>
      )}
      {second && (
        <tbody>
          <tr>
            <th>Имя аккаунта</th>
            <th>Дата транзакции</th>
            <th>Баланс</th>
          </tr>
          {history.map((n, index) => (
            <tr key={index}>
              <td>{n.accountName}</td>
              <td>{n.date}</td>
              <td>{n.sum}</td>
            </tr>
          ))}
        </tbody>
      )}
    </table>
    {mon && (
      <div className="money__div">
        <AddMoney money={money} setMoney={setMoney} inf={inf} />
      </div>
    )}
  </div>
);

function Add(e) {
  console.log(e);
}
const PersonArea = ({ inf, history }) => (
  <div className="personal">
    <Person inf={inf} history={history}></Person>
  </div>
);
