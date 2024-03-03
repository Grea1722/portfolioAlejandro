import React from "react";
import { skills } from "./js/skills";
import { motion } from "framer-motion";

const skillImages = skills;

export const Skills = () => {
  const inViewConfig = {
    once: true,
    amount: 0.02,
    getVisibility: (el) => {
      const rect = el.getBoundingClientRect();
      const viewHeight = window.innerHeight;
      return rect.top < viewHeight * 0.2;
    },
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 200 }}
      whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
      viewport={inViewConfig}
      className="skills"
    >
      <div className="techText" id="habilidades">
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
    </motion.div>
  );
};
