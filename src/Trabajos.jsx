import React from "react";
import { proyectsImages } from "./js/proyects";
import { motion } from "framer-motion";

const trabajos = proyectsImages;

export const Trabajos = () => {
  return (
    <div className="works" id="experiencia">
      <h5>Proyectos</h5>
      <div className="proyects">
        {trabajos.map((trabajo, index) => (
          <motion.div
            initial={{
              opacity: 0,
              y: index % 2 === 0 ? 200 : 300,
            }}
            whileInView={{
              opacity: 1,
              y: 0, // Slide in to its original position
              transition: {
                duration: 1, // Animation duration
              },
            }}
            viewport={{ once: true }}
            className="proyectCard"
            key={index}
          >
            <img src={trabajo.src} alt={trabajo.alt} />
            <div className="proyectCardContent">
              <h3>{trabajo.name}</h3>
              <p>{trabajo.description}</p>
              {trabajo.funcionalidades && (
                <ul>
                  {trabajo.funcionalidades.map((funcion, index) => (
                    <li key={index}>
                      <p className="funcTitle">{funcion.titulo}</p>
                      <p className="funcDesc">{funcion.description}</p>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
