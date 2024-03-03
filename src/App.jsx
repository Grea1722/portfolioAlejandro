import { useState } from "react";
import "./App.css";
import "./medias.css";
import { Navbar } from "./Navbar";
import { Hero } from "./Hero";
import { Skills } from "./Skills";
import { Trabajos } from "./Trabajos";
import { Footer } from "./Footer";

function App() {
  return (
    <div className="container">
      <div className="background-container">
        <Navbar />
        <Hero />
        <Skills />
        <Trabajos />
        <Footer />
      </div>
    </div>
  );
}

export default App;
