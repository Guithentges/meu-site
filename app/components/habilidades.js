import Image from "next/image";
export default function Habilidades() {
    return(
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
    )
}