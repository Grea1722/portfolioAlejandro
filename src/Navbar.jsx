import React, { useEffect, useState } from "react";
import { laptop } from "./assets";
import { isMobile } from "react-device-detect";
import { HamburguerMenu } from "./HamburguerMenu";
import { useCycle } from "framer-motion";

export const Navbar = () => {
  // const isMobile = isMobile();
  // const [isOpen, setIsOpen] = useState(true);
  const [mobileNav, toggleMobileNav] = useCycle(false, true);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="navbar">
      <section className="navbarimg">
        <a href="#">
          <img src={laptop} alt="laptop icon" />
        </a>
      </section>
      {width < 780 ? (
        <HamburguerMenu isOpen={mobileNav} onToggle={() => toggleMobileNav()} />
      ) : (
        <>
          <section className="navbarlinks">
            <a href="#inicio">Inicio</a>
            <a href="#habilidades">Habilidades</a>
            <a href="#experiencia">Experiencia</a>
          </section>
        </>
      )}
    </div>
  );
};
