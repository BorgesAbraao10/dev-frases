import { useState } from "react";
import "./App.css";
import logoImg from "./assets/logo.png";

function App() {
  return (
    <div className="container">
      <img src={logoImg} alt="Logo frases" className="logo" />

      <h2 className="title">Categorias</h2>
      <section className="category-area">
        <button className="category-button">Motivação</button>
        <button className="category-button"> Bem estar </button>
      </section>

      <button className="button-frase">Gerar Frases</button>
      <h3 className="texto-frase">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae, laborum
        dolorem voluptatem aliquid, soluta velit voluptatibus obcaecati, odio
        perferendis at incidunt! Odio debitis harum, reiciendis sint esse
        laborum nisi sapiente!
      </h3>
    </div>
  );
}

export default App;
