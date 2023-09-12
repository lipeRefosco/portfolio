import "./page.css";
import FelipeLogo from "./assets/felipe.svg";
import { BiLogoGithub, BiLogoLinkedin } from "react-icons/bi"

export default function Home() {
  return (
    <main className="main">
      <header className="header">
        <p>Olá! Me chamo</p>
        <img className="logo" src={FelipeLogo.src} alt="felipe"/>
        <p className="presentations">
          Estudante de <br />
          Engenharia de Software
        </p>
      </header>
      
      <nav className="menu">
        <a className="button btn-filled" href="#about">Sobre mim</a>
        <a className="button btn-filled" href="#">Veja meus projetos</a>
        <a className="button btn-filled" href="#">Entre em contato</a>
      </nav>

      <section className="sections links">
        <h6>Links</h6>
        <a href="#" className="button"><span className="btn-outline"><BiLogoLinkedin /></span>Linkedin</a>
        <a href="#" className="button"><span className="btn-outline"><BiLogoGithub /></span>Github</a>
      </section>

      <section id="about" className="section">
        <h2>Sobre mim</h2>
        <p>Estudo software para a criação de soluções dinámicas, escaláveis e de fácil manutenção.</p>
      </section>

      <section id="projects" className="section">
        <h2>Projetos</h2>
        <div className="project-card">
          <div className="project-image">
            
          </div>
          <div className="project-infos">
            <h3>Project #1 name</h3>
            <p>Descrição curta do projeto</p>
            <a href="#" className="button btn-outline">Mais detalhes</a>
          </div>
        </div>
      </section>

      <hr className="separator" />
      
      <footer className="footer">
        Design e front feito por mim XD.
      </footer>
    </main>
  )
}
