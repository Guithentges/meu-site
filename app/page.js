import Image from "next/image";


export default function Home() {
  return (
    <main className="main">
      <header>
        <nav id="navbar">
          <a id="nav-link" href="#welcome-section">Sobre
          </a>
          <a id="nav-link" href="#Habilidades">Habilidades
          </a>
          <a id="nav-link" href="#projects">Projetos
          </a>
        </nav>
      </header>
        <section id="welcome-section">
        <div className="self">
          <div className="intro">
            <p className="function">Desenvolvedor <span className="job">Full-Stack</span></p>
            <h1><span className="name">Guilherme Hentges</span></h1>
            <p className="text-intro">Estudante de Ciência da Computação , apaixonado por tecnologia e inovação. <br></br> Tenho habilidade em programação, comunicação, Web Design, Canva e Pacote Office que desenvolvi durante a minha trajetória acadêmica e profissional.</p>
            <div className="socials">
              <a target="_blank" href="https://github.com/Guithentges"><i className='bx bxl-github'></i></a>
              <a target="_blank" href="https://www.linkedin.com/in/guilherme-hentges-1513a9264/"><i className='bx bxl-linkedin'></i></a>
              <a target="_blank" id="profile-link" href="https://www.instagram.com/guihentges/"><i className='bx bxl-instagram'></i></a>
              <a target="_blank" href="https://wa.me/5581992587494"><i className='bx bxl-whatsapp'></i></a>
            </div>
          </div>
          <div className="img">
            <Image id="eu"  className="w-150 h-150 md:w-48 md:h-48 rounded-full mx-auto" alt="Foto minha" width={250} height={250} src="/Gui.png" rel="Me"></Image>
          </div>
        </div>
      </section>
      <section id="Habilidades">
        <div className="habilidades">
          <div className="hl">
          <h1>Habilidades</h1>
          </div>
          <div className="skills sk1">
            <a target="_blank" href="https://guithentges.github.io/DocPython/"><Image src="/python.svg"width={20} height={20} alt=""></Image><span className="skill-name">Python</span></a>
            <a target="_blank" href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript"><Image src="/javascript.svg" width={20} height={20} alt=""></Image><span className="skill-name">Javascript</span></a>
            <a target="_blank" href="https://nodejs.org/pt"><Image src="/node.png"width={30} height={30} alt=""></Image><span className="skill-name">Node.js</span></a>
            <a target="_blank" href="https://vuejs.org/"><Image src="/vue.png"width={20} height={20} alt=""></Image><span className="skill-name">Vue.js</span></a>
          </div>
          <div className="skills sk2">
            <a target="_blank" href="https://github.com/Guithentges"><Image src="/github.svg" width={20} height={20} alt=""></Image><span className="skill-name">Github</span></a>
            <a target="_blank" href="https://www.docker.com/"><Image src="/docker-img.png"width={20} height={20} alt=""></Image><span className="skill-name">Docker</span></a>
            <a target="_blank" href="https://developer.mozilla.org/pt-BR/docs/Web/HTML"><Image src="/html.svg" width={20} height={20} alt=""></Image><span className="skill-name">Html</span></a>
            <a target="_blank" href="https://developer.mozilla.org/pt-BR/docs/Web/CSS"><Image src="/css.svg" width={20} height={20} alt=""></Image><span className="skill-name">Css</span></a>
            <a target="_blank" href="https://www.ibm.com/br-pt/think/topics/structured-query-language"><Image src="/sql.png" width={20} height={20} alt=""></Image><span className="skill-name">SQL</span></a>
          </div>
        </div>
      </section>
      <section id="projects">
        <div className="projects-head">
          <h1>Projetos</h1>
        </div>
        <div className="projects-grid">
          <div className="proj">
            <a target="_blank" href="https://guithentges.github.io/tributopele/"><Image className="project-img" src="/imgpele.png" width={500} height={500} alt="Tributo Pele"></Image>
              <p>Tributo a Pelé</p>
            </a>
          </div>
          <div className="proj">
            <a target="_blank" href="https://guithentges.github.io/Criar-convite/"><Image className="project-img" src="/convite.png" width={500} height={500} alt="Criar convite"></Image>
              <p>Formulário de criar convite</p>
            </a>
          </div>
          <div className="proj">
            <a target="_blank" href="https://guithentges.github.io/DocPython/"><Image className="project-img" src="/doc.png" width={500} height={500} alt="Python documentation page"></Image>
              <p>Página sobre Python</p>
            </a>
          </div>
          <div className="proj">
            <a target="_blank" href="https://guithentges.github.io/LP-Livro/"><Image className="project-img" src="/plp.png" width={500} height={500} alt="Product landing page"></Image>
              <p>Product landing page</p>
            </a>
          </div>
          <div className="proj">
            <a target="_blank" href="https://guithentges.github.io/Lista-de-compras/"><Image className="project-img" src="/ListaCompras.png" width={500} height={500} alt="Lista de Lista de Compras"></Image>
              <p>Lista de Compras</p>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

