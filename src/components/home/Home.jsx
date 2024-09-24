import React from "react";
import "./home.css";
import Me from "../../assets/avatar-1.svg";
import HeaderSocials from "./HeaderSocials";
import ScrollDown from "./ScrollDown";
import Shapes from "./Shapes";
const Home = () => {
  return (
    <section className="home container" id="home">
        <Shapes/>
      <div className="intro">
        <img src={Me} alt="" className="home__img" />
        <h1 className="home__name">Ankit Gwari</h1>
        <span className="home__education">I'm a Software Developer</span>

        <HeaderSocials/>

        <a href="#contact" className="btn">Let's Talk</a>


      </div>
        <ScrollDown/>
    </section>
  );
};

export default Home;
