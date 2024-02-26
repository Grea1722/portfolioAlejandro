import { useState } from "react";
import "./App.css";
import "./medias.css";
import { Navbar } from "./Navbar";
import { Hero } from "./Hero";
import { Skills } from "./Skills";
import { Trabajos } from "./Trabajos";

function App() {
  return (
    <div className="container">
      <div className="background-container">
        <Navbar />
        <Hero />
        <Skills />
        <Trabajos />
      </div>
    </div>
  );
}

export default App;
