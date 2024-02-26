import React from "react";
import { laptop } from "./assets";

export const Navbar = () => {
  return (
    <div className="navbar">
      <section className="navbarimg">
        <a href="#">
          <img src={laptop} alt="laptop icon" />
        </a>
      </section>
      <section className="navbarlinks">
        <a href="#">Inicio</a>
        <a href="#">Habilidades</a>
        <a href="#">Experiencia</a>
        <a href="#">Contacto</a>
      </section>
    </div>
  );
};
