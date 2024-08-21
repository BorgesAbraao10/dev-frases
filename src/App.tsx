import { useState } from "react";
import "./App.css";
import logoImg from "./assets/logo.png";

function App() {
  const [textoFrase, setTextoFrase] = useState("");
  const [categoriaSelecionada, setCategoriaSelecionada] = useState(0);

  const allFrases = [
    {
      id: 1,
      nome: "Motivação",
      frases: [
        "Acredite no poder dos seus sonhos.",
        "A persistência realiza o impossível.",
        "Cada novo dia é uma nova oportunidade de ser feliz.",
        "Você é mais forte do que pensa que é.",
        "O sucesso é a soma de pequenos esforços repetidos dia após dia.",
        "Seja a mudança que você deseja ver no mundo.",
        "Não coloque limite em seus sonhos, coloque fé!",
        "O impossível é só questão de opinião.",
        "A jornada de mil milhas começa com um passo.",
        "Faça dar certo, até dar certo!",
      ],
    },
    {
      id: 2,
      nome: "Bom dia",
      frases: [
        "Bom dia! Que seu dia seja tão brilhante quanto o seu sorriso.",
        "Acorde com determinação, vá dormir com satisfação. Bom dia!",
        "Que hoje seja um dia repleto de boas surpresas. Bom dia!",
        "Bom dia! Que a felicidade te acompanhe em cada passo.",
        "Cada manhã traz uma nova oportunidade. Aproveite! Bom dia!",
        "Bom dia! Que seu dia seja tão especial quanto você.",
        "A vida é um presente. Aproveite cada momento. Bom dia!",
        "Bom dia! Que a luz do sol ilumine seu caminho hoje.",
        "Que seu dia seja cheio de amor e alegria. Bom dia!",
        "Bom dia! Que você tenha um dia abençoado e produtivo.",
      ],
    },
  ];

  function handleSwitchCategory(index: number) {
    setCategoriaSelecionada(index);
  }

  function gerarFrase() {
    const numeroAleatorio = Math.floor(
      Math.random() * allFrases[categoriaSelecionada].frases.length
    );
    setTextoFrase(
      `"${allFrases[categoriaSelecionada].frases[numeroAleatorio]}"`
    );
  }

  return (
    <div className="container">
      <img src={logoImg} alt="Logo frases" className="logo" />

      <h2 className="title">Categorias</h2>
      <section className="category-area">
        {allFrases.map((item, index) => (
          <button
            key={item.id}
            className="category-button"
            style={{
              borderWidth:
                item.nome === allFrases[categoriaSelecionada].nome ? 2 : 0,
              borderColor: "#1fa4db",
            }}
            onClick={() => handleSwitchCategory(index)}
          >
            {item.nome}
          </button>
        ))}
      </section>

      <button className="button-frase" onClick={gerarFrase}>
        Gerar Frases
      </button>
      {textoFrase !== "" && <h3 className="texto-frase">{textoFrase}</h3>}
    </div>
  );
}

export default App;
