import Image from "next/image";
export default function Projects() {
    return(
        <section id="projects">
            <div className="projects-head">
            <h1>Projetos</h1>
            </div>
            <div className="projects-grid">
            <div className="proj">
                <a target="_blank" href="/jogo_forca"><Image className="project-img" src="/forca.png" width={500} height={500} alt="Jogo da Forca"></Image><div className="proj-text">Jogo da Forca desenvolvido por mim como atividade para a cadeira de Desenvolvimento Web Mobile da Universidade Católica de Pernambuco, visando aprimorar meus conhecimentos em Desenvolvimento Frontend</div>
                <p>Jogo da Forca</p>
                </a>
            </div>
            <div className="proj">
                <a target="_blank" href="https://github.com/Guithentges/Aura"><Image className="project-img" src="/aura.png" width={500} height={500} alt="Site de E-Commerce Aura"></Image><div className="proj-text">Aura é um Website de E-Commerce completo, com funcionalidade de Cadastro e Login, catálogo de roupas com categorias, carrinho de compras e pedidos anteriores por cliente. Feito em django, totalmente criado e desenvolvido por mim e pelo meu grupo para a disciplina de Análise e Projeto de Software.</div>
                <p>E-commerce Aura</p>
                </a>
            </div>
            <div className="proj">
                <a target="_blank" href="https://guithentges.github.io/tributopele/"><Image className="project-img" src="/imgpele.png" width={500} height={500} alt="Tributo Pele"></Image><div className="proj-text">Esse foi o meu primeiro site construído, durante um curso de Html e Css, onde homenagiei o Rei do Futebol, Pelé.</div>
                <p>Tributo a Pelé</p>
                </a>
            </div>
            <div className="proj">
                <a target="_blank" href="https://guithentges.github.io/Criar-convite/"><Image className="project-img" src="/convite.png" width={500} height={500} alt="Criar convite"></Image><div className="proj-text">Formulário para fazer convites de festas e eventos, desenvolvido por mim, com base no design do curso de Desenvolvedor Full-Stack da Rocketseat para praticar a parte do frontend.</div>
                <p>Formulário de criar convite</p>
                </a>
            </div>
            <div className="proj">
                <a target="_blank" href="https://guithentges.github.io/DocPython/"><Image className="project-img" src="/doc.png" width={500} height={500} alt="Python documentation page"></Image><div className="proj-text">Site documental criado e desenvolvido por mim, um dos meus primeiros projetos e ajudou a entender melhor tanto o desenvolvimento no client-side quanto os conhecimentos que eu já possuía em Python.</div>
                <p>Página sobre Python</p>
                </a>
            </div>
            <div className="proj">
                <a target="_blank" href="https://guithentges.github.io/LP-Livro/"><Image className="project-img" src="/plp.png" width={500} height={500} alt="Product landing page"></Image><div className="proj-text">A Product Landing Page foi o projeto Frontend mais interessante que peguei, onde pude trabalhar as minhas habilidades em Css Animations e Transitions e também responsividade.</div>
                <p>Product landing page</p>
                </a>
            </div>
            <div className="proj">
                <a target="_blank" href="https://guithentges.github.io/Lista-de-compras/"><Image className="project-img" src="/ListaCompras.png" width={500} height={500} alt="Lista de Lista de Compras"></Image><div className="proj-text">Aplicação de Lista de Compras desenvolvido por mim, para trabalhar o meu conhecimento em JavaScript e o DOM, junto com entendimento de web design e Figma.</div>
                <p>Lista de Compras</p>
                </a>
            </div>
            </div>
        </section>
    )
}