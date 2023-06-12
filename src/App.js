import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./MainPage/MainPage";
import Header from "./MainPage/Header/Header";
import AuthForm from "./MainPage/AuthForm/AuthForm";
import Registration from "./MainPage/Registration/Registration";
import Cabinet from "./MainPage/Cabinet/Cabinet";

function App(props) {
  return (
    <BrowserRouter>
      <Routes>
        {/*<Route path="/" element={<MainPage />}>*/}
        {/*  <Route index element={<Header />} />*/}
        {/*  <Route path="blogs" element={<Registration />} />*/}
        <Route path="/" element={<Cabinet />} />
        {/*<Route path="contact" element={<AuthForm />} />*/}
        {/*</Route>*/}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
