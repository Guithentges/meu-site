import Image from "next/image";
export default function Welcome() {
    return(
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
    )
}