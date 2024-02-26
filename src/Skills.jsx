import React from "react";
import { skills } from "./js/skills";

const skillImages = skills;

export const Skills = () => {
  return (
    <div className="skills">
      <div className="techText">
        <section className="introtext">
          <h5>Habilidades</h5>
          <hr />
        </section>

        <h2>Algunas de las nuevas tecnologias que utilizo</h2>
      </div>
      <div className="skillcards">
        {skillImages.map((skill, index) => (
          <div className="tooltip" key={index}>
            <img src={skill.src} alt={skill.alt} />
            <div className={`tooltiptext ${skill.name}`}>{skill.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
