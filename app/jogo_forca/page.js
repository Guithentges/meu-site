"use client";
import { useState } from "react";

let palavras = ["React", "Next", "Programacao", "Web", "Mobile"]; //Lembrar de colocar as 30 palavras

function reset() {
  window.location.reload();
}

function numeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default function JogoForca() {
  const [palavra] = useState(
    palavras[numeroAleatorio(0, palavras.length - 1)].toUpperCase()
  );
  const [letra, setLetra] = useState("");
  const [acertos, setAcertos] = useState([]);
  const [erros, setErros] = useState([]);

  function tentar() {
    if (!letra) return;

    const letraMaiuscula = letra.toUpperCase();
    if (!acertos.includes(letraMaiuscula) && palavra.includes(letraMaiuscula)) {
      setAcertos([...acertos, letraMaiuscula]);
      alert("Acertou!");
    }
    else{
      setErros([...erros, letraMaiuscula]);
      if(erros.length + 1 >= 6){
        alert(`Você perdeu! A palavra era: ${palavra}`);
        reset();
      }
    }

    setLetra(""); 
    if(acertos.length + 1 === palavra.length){
        reset();
      }
  }

  function mostrarPalavra() {
    return palavra
      .split("")
      .map((l) => (acertos.includes(l) ? l : "_"))
      .join(" ");
  }

  return (
    <div className="jogo-forca-container">
      <h1>Jogo da Forca</h1>
      <p>
        Bem-vindo ao Jogo da Forca! Tente adivinhar a palavra antes que a forca
        esteja completa.
      </p>

      <div className="palavra-chave">{mostrarPalavra()}</div>
      <div className="erros">Letras erradas: {erros.join(", ")}</div>
      <input
        type="text"
        maxLength="1"
        value={letra}
        onChange={(e) => {
          const valor = e.target.value.toUpperCase();
          if (/^[A-Z]$/.test(valor) || valor === "") {
            setLetra(valor); 
          }
        }}
        className="letra-input"
      />
      <button onClick={tentar}>Tentar Letra</button>
      <button onClick={reset}>Resetar Jogo</button>
    </div>
  );
}
