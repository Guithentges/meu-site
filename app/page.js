import Header from "./components/header.js";
import Welcome from "./components/welcome.js";
import Habilidades from "./components/habilidades.js";
import Projects from "./components/projects.js";


export default function Home() {
  return (
    <main className="main">
      <Header></Header>
      <Welcome></Welcome>
      <Habilidades></Habilidades>
      <Projects></Projects>
    </main>
  );
}

