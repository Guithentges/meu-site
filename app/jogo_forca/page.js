"use client";
import { useState, useEffect, useRef } from "react";

const palavras = [
  "ALGORITMO",
  "INTELIGENCIA",
  "DADOS",
  "PROGRAMACAO",
  "SISTEMA",
  "COMPUTADOR",
  "INTERNET",
  "NAVEGADOR",
  "SOFTWARE",
  "HARDWARE",
  "ROBOTICA",
  "SEGURANCA",
  "REDES",
  "DESENVOLVIMENTO",
  "CONECTIVIDADE",
  "TECNOLOGIA",
  "COMPILADOR",
  "SERVIDOR",
  "MONITOR",
  "FUNCIONAMENTO",
  "PYTHON",
  "JAVASCRIPT",
  "PROTOCOLO",
  "BIBLIOTECA",
  "CODIGO",
  "AUTOMACAO",
  "MEMORIA",
  "APRENDIZADO",
  "NUVEM",
  "CRIPTOGRAFIA",
];

const alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

function numeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default function JogoForca() {
  const [palavra] = useState(
    palavras[numeroAleatorio(0, palavras.length - 1)].toUpperCase()
  );
  const [acertos, setAcertos] = useState([]);
  const [erros, setErros] = useState([]);
  const [resultado, setResultado] = useState("");

  const acertosRef = useRef(acertos);
  const errosRef = useRef(erros);
  const resultadoRef = useRef(resultado);

  useEffect(() => { acertosRef.current = acertos; }, [acertos]);
  useEffect(() => { errosRef.current = erros; }, [erros]);
  useEffect(() => { resultadoRef.current = resultado; }, [resultado]);

  
  function processLetter(letter) {
    if (resultadoRef.current) return;
    if (acertosRef.current.includes(letter) || errosRef.current.includes(letter)) return;

    if (palavra.includes(letter)) {
      setAcertos(prev => {
        if (prev.includes(letter)) return prev;
        const novos = [...prev, letter];
        const venceu = palavra.split("").every(l => novos.includes(l));
        if (venceu) setResultado(`Parabéns, você acertou a palavra: `);
        return novos;
      });
    } else {
      setErros(prev => {
        if (prev.includes(letter)) return prev;
        const novos = [...prev, letter];
        if (novos.length >= 6) setResultado(`Você perdeu! A palavra era: `);
        return novos;
      });
    }
  }

  useEffect(() => {
    function handleKeydown(e) {
      const tecla = e.key.toUpperCase();
      if (/^[A-Z]$/.test(tecla)) {
        processLetter(tecla);
      }
    }
    window.addEventListener("keydown", handleKeydown);
    return () => window.removeEventListener("keydown", handleKeydown);
  }, []); 

  function mostrarPalavra() {
    return palavra
      .split("")
      .map((l) => (acertos.includes(l) ? l : "_"))
      .join(" ");
  }

  function reset() {
    window.location.reload();
  }

  return (
    <div className="forca-main">
      <a className="voltar" href="./"><div className="icone-seta"></div></a>
      <div className="forca-header">
        <h1>Jogo da Forca</h1>
        <p>Bem-vindo ao Jogo da Forca!<br></br> Use o Teclado ou Mouse para testar as letras e tentar adivinhar a palavra antes que a forca esteja completa.</p>
      </div>
      <div className="forca-container">
        <div className="forca">
          <div className="poste"></div>
          <div className="barra-horizontal"></div>
          <div className="corda"></div>
            { erros.length > 0 &&(<div className="cabeca"></div>)}
            { erros.length > 1 &&(<div className="corpo"></div>)}
            { erros.length > 2 &&(<div className="braco-esquerdo"></div>)}
            { erros.length > 3 &&(<div className="braco-direito"></div>)}
            { erros.length > 4 &&(<div className="perna-esquerda"></div>)}
            { erros.length > 5 &&(<div className="perna-direita"></div>)}
        </div>
        { !resultado &&(<div className="tentativas">Tentativas restantes: { 6 - erros.length}</div>)}
        <div className="palavra-chave">{mostrarPalavra()}</div>
        {erros.length != 0 && (<div className="erros">Letras erradas: <span>{erros.join(", ")}</span></div>)}

        {!resultado && (
          <div className="teclado">
            {alfabeto.map((l) => {
              const jaTentada = acertos.includes(l) || erros.includes(l);
              return (
                <button
                  key={l}
                  onClick={() => processLetter(l)}
                  disabled={jaTentada}
                  className={`tecla ${jaTentada ? "desativada" : ""}`}
                >
                  {l}
                </button>
              );
            })}
          </div>
        )}

        {resultado && <div className="mensagem">{resultado} <span>{palavra}</span></div>}

        <button className="reset" onClick={reset}>Resetar Jogo</button>
      </div>
    </div>
  );
}
