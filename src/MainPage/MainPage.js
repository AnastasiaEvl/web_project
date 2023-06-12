import React from "react";
import "./MainPage.css";
import ForWhom from "./ForWhom/ForWhom";
import AboutServise from "./AboutService/AboutServise";
import Header from "./Header/Header";
import Banner from "./Banner/Banner";
import Possibilities from "./Possibilities/Possibilities";
import Footer from "./Footer/Footer";

export default function MainPage() {
  return (
    <div className="wrapper">
      <Header></Header>
      <Banner></Banner>
      <section id="elOne">
        {" "}
        <ForWhom></ForWhom>
      </section>
      <section id="elTwo">
        {" "}
        <AboutServise></AboutServise>
      </section>
      <section id="elThree">
        <Possibilities></Possibilities>
      </section>
      <Footer></Footer>
    </div>
  );
}
