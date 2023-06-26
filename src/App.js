import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./MainPage/MainPage";
import Header from "./MainPage/Header/Header";
import AuthForm from "./MainPage/AuthForm/AuthForm";
import Registration from "./MainPage/Registration/Registration";
import Cabinet from "./MainPage/Cabinet/Cabinet";
import Person from "./MainPage/Cabinet/Person";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route element={<Header />} />
        <Route path="/blogs" element={<Registration />} />
        <Route path="/contact" element={<AuthForm />} />
        <Route path="/cabinet" element={<Cabinet />} />
        <Route path="/person" element={<Person />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
