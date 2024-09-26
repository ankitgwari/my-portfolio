import React from "react";
import "./about.css";
import Image from "../../assets/avatar-2.svg";
import AboutBox from "./AboutBox";
const About = () => {
  return (
    <section className="about container section" id="about">
      <h2 className="section__title">About Me</h2>

      <div className="about__container grid">
        <img src={Image} alt="" className="about__img" />

        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">
              Aspiring software developer currently pursuing a B. Tech in
              Computer Science and Engineering. Passionate about coding, problem
              solving, and developing innovative software solutions. Seeking a
              software developer role to apply my skills in programming,
              software development, and teamwork.
            </p>
            <a href="https://drive.google.com/file/d/1pGAipAE6vdcOSJ7WzPFXYS4n0DOzp1ha/view?usp=drive_link"className="btn">
              Download CV
            </a>
          </div>
        </div>
      </div>
      <AboutBox />
    </section>
  );
};

export default About;
