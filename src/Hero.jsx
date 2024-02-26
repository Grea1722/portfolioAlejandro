import React, { useState } from "react";
import { instagram, gmail, linkedin, whats } from "./assets/index.js";
import { isMobile } from "react-device-detect";
import cv from "./assets/cv.pdf";

const webWhats = "https://web.whatsapp.com/";
const mobileWhats =
  "https://api.whatsapp.com/send?phone=+16196792750&text=Hola%20me%20gustaria%20contactar%20contigo.";

export const Hero = () => {
  const [dispositivo, setDispositivo] = useState();

  const esCel = () => {
    if (isMobile) {
      setDispositivo(true);
    } else {
      setDispositivo(false);
    }
  };

  const sendMessage = () => {
    const subject = "Desarrollo web";
    const body = "Me gustaria contactar contigo.";
    const href = `mailto:alexstaark8@gmail.com?subject=${subject}&body=${body}`;

    window.location.href = href;
  };

  const downloadCv = () => {
    window.lo;
  };
  return (
    <div className="hero">
      <div className="im">
        <h1>Alejandro Solis.</h1>
        <hr />
        <div className="redes">
          <a
            href="https://www.instagram.com/qizanami/"
            target="_blank"
            className="tooltip"
          >
            <img src={instagram} alt="instagram icon" />
            <div className="tooltiptext insta">Instagram!</div>
          </a>
          <a
            href="mailto:alexstaark8@gmail.com?subject=Desarrollo%20web&body=Me%20gustaria%20poder%20contactar%20contigo."
            target="_blank"
            className="tooltip"
          >
            <img src={gmail} alt="gmail icon" />
            <div className="tooltiptext gmail">Gmail!</div>
          </a>
          <a
            href={`${dispositivo ? mobileWhats : webWhats}`}
            target="_blank"
            className="tooltip"
          >
            <img src={whats} alt="whatsapp icon" />
            <div className="tooltiptext whats">Whatsapp!</div>
          </a>
          <a
            href="https://www.linkedin.com/in/alejandro-solis-4b085119b/"
            target="_blank"
            className="tooltip"
          >
            <img src={linkedin} alt="linkedin icon" />
            <div className="tooltiptext">Linkedin!</div>
          </a>
        </div>
        <div className="descargarCv">
          <a className="btnCv" href={cv} download="AlejandroCv.pdf">
            Descargar CV
          </a>
        </div>
      </div>
      <div className="introduccion">
        <section className="introtext">
          <h5>Introducción</h5>
          <hr />
        </section>

        <h2>Ingeniero en desarrollo de software.</h2>
        <h3>Hola, soy Alejandro, es un gusto conocerte.</h3>
        <section className="pContainer">
          <p>
            Soy un ingeniero en desarrollo de software con pasión por el
            desarrollo frontend. Me gradué hace poco y desde entonces he estado
            trabajando en diferentes proyectos web, usando tecnologías como
            HTML, CSS, JavaScript, React. Me gusta crear sitios web responsivos,
            dinámicos y elegantes, que cumplan con los estándares de calidad y
            accesibilidad. También me gusta aprender nuevas herramientas y
            tendencias en el mundo del desarrollo web, así como compartir mis
            conocimientos y experiencias con otros programadores. En mi tiempo
            libre, disfruto de la música y los videojuegos, dos de mis grandes
            aficiones.
          </p>
          <p>
            En este portafolio podrás ver algunos de los proyectos web que he
            realizado o en los que estoy trabajando actualmente, así como las
            habilidades y herramientas que domino. Mi objetivo es seguir
            creciendo como desarrollador web frontend y ofrecer soluciones
            creativas y eficientes a los problemas y necesidades.
          </p>
        </section>

        <p>
          Si te interesa mi trabajo o quieres contactarme, puedes hacerlo a
          través de los enlaces que encontrarás al final de esta página. Gracias
          por visitar mi portafolio web.
        </p>

        <i>
          &lt; Cada persona tiene una manera única de ver el mundo, y esa es su
          forma de arte./&gt;
        </i>
        <button className="btn" onClick={sendMessage}>
          <i className="animation" />
          Contactar <i className="animation" />
        </button>
      </div>
    </div>
  );
};
