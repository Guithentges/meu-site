import Image from "next/image";


export default function Home() {
  return (
    <main className="main">
      <div className="card">
        <Image
          src="/Gui.png"
          alt="Minha foto"
          width={150}
          height={150}
          className="eu"
        />
        <h1 >Guilherme Tavares Hentges</h1>
        <p >
          Estudante de Ciência da Computação do 5º Período,
          bastante motivado e interessado, com foco em Desenvolvimento Web Fullstack e Análise de Dados.
        </p>
      </div>
    </main>
  );
}

