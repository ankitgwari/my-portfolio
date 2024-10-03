import React from "react";
import "./skills.css";
import Image1 from "../../assets/service-1.svg";
import Image2 from "../../assets/service-2.svg";
import Image3 from "../../assets/service-3.svg";

const data = [
  {
    id: 1,
    image: Image1,
    title: "UI/UX design",
    description:
      "UI (User Interface) and UX (User Experience) are essential components in product design, especially for digital platforms like websites, apps, and software.",
  },
  {
    id: 2,
    image: Image2,
    title: "Web Development",
    description:
      "It brings together visual design and technical skills to create dynamic, responsive, and functional websites that serve various purposes on the internet.",
  },
  {
    id: 3,
    image: Image3,
    title: "Photography",
    description:
      "Photography as a passion is more than just taking pictures—it’s about capturing moments, emotions, and stories through the lens",
  },
];

const Skills = () => {
  return (
    <section className="skills container section" id="skills">
      <h2 className="section__title">Skills</h2>
      <div className="skills__container grid">
        {data.map(({ id, image, title, description }) => {
          return (
            <div className="skills__card" key={id}>
              <img src={image} alt="" className="skills__img" />
              <h3 className="skills__title">{title}</h3>
              <p className="skills__description">{description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
