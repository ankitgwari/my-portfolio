import React from "react";

const AboutBox = () => {
  return (
    <div className="about__boxes grid">
      <div className="about__box">
        <i className="about__icon icon-fire"></i>
        <div>
          <h3 className="about__title">5</h3>
          <span className="about__subtitle">Projects Completed</span>
        </div>
      </div>
      <div className="about__box">
        <i className="about__icon icon-graph"></i>
        <div>
          <h3 className="about__title">200+</h3>
          <span className="about__subtitle">Problems Solved</span>
        </div>
      </div>
      <div className="about__box">
        <i className="about__icon icon-badge"></i>
        <div>
          <h3 className="about__title ">4</h3>
          <span className="about__subtitle">Certifications</span>
        </div>
      </div>
    </div>
  );
};

export default AboutBox;
