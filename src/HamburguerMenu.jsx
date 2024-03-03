import { motion } from "framer-motion";
import React from "react";

export const HamburguerMenu = ({ isOpen, onToggle }) => {
  const variants = {
    open: {
      x: "0%",
      opacity: 1,
      transition: {
        when: "beforeChildren",
      },
    },
    closed: {
      x: "-100%",
      opacity: 0,
    },
  };
  return (
    <div className="mobileNav">
      <motion.button
        onClick={onToggle}
        className="hamburguer-button"
        animate={isOpen ? "open" : "closed"}
      >
        <motion.span
          variants={{ closed: { rotate: 0, y: 0 }, open: { rotate: 45, y: 7 } }}
          className="menuSpan 1"
        ></motion.span>
        <motion.span
          variants={{ closed: { opacity: 1 }, open: { opacity: 0 } }}
          className="menuSpan 3"
        ></motion.span>
        <motion.span
          variants={{
            closed: { rotate: 0, y: 0 },
            open: { rotate: -45, y: -7 },
          }}
          className="menuSpan 2"
        ></motion.span>
      </motion.button>

      <motion.div
        initial="closed"
        variants={variants}
        animate={isOpen ? "open" : "closed"}
        transition={{ duration: 0.5 }}
        className="hamburger-menu" // Added className for styling (optional)
      >
        <motion.section
          variants={{
            open: { y: 0, opacity: 1 },
            closed: { y: "25%", opacity: 0 },
          }}
          className="navbarlinksHamburguer"
        >
          <ul>
            <li>
              <a href="#inicio" onClick={onToggle}>
                INICIO
              </a>
            </li>
            <li>
              <a href="#habilidades" onClick={onToggle}>
                HABILIDADES
              </a>
            </li>
            <li>
              <a href="#experiencia" onClick={onToggle}>
                EXPERIENCIA
              </a>
            </li>
          </ul>
        </motion.section>
      </motion.div>
    </div>
  );
};
