import React from "react";
import { proyectsImages } from "./js/proyects";

const trabajos = proyectsImages;

export const Trabajos = () => {
  return (
    <div className="works">
      <h5>Proyectos</h5>
      <div className="proyects">
        {trabajos.map((trabajo, index) => (
          <div className="proyectCard" key={index}>
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
          </div>
        ))}
      </div>
    </div>
  );
};
