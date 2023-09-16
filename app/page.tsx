import "./page.css";
import Menu from "./Componenets/Menu";
import MenuButton from "./Componenets/MenuButton";
import SectionLinks from "./Componenets/SectionLinks";
import Link from "./Componenets/Link";
import Button from "./Componenets/Button";
import { BiLogoGithub, BiLogoLinkedin } from "react-icons/bi";
import Section from "./Componenets/Section";
import ProjectCard from "./Componenets/ProjectCard";
import Separator from "./Componenets/Separator";
import Header from "./Componenets/Header";
import Logo from "./Componenets/Logo";
import {Heading, Headings} from "./Componenets/Headings";
import { TextAlign } from "./Aligns";
import Footer from "./Componenets/Footer";

export default function Home() {
  return (
    <main className="main">
      <Header>
        <p>Olá! Me chamo</p>
        <Logo />
        <p className="presentations">
          Estudante de <br />
          Engenharia de Software
        </p>
      </Header>

      <Menu>
        <Link href="#about"><MenuButton>Sobre mim</MenuButton></Link>
        <Link href="#projects"><MenuButton>Veja meus projetos</MenuButton></Link>
        <Link href="#about"><MenuButton>Entre em contato</MenuButton></Link>
      </Menu>

      <SectionLinks>
        <Heading heading={Headings.h6} align={TextAlign.center}>Links</Heading>

        <Link href="#">
          <Button outlined={true}>
            <BiLogoLinkedin />
          </Button>
          Linkedin
        </Link>

        <Link href="#">
          <Button outlined={true}>
            <BiLogoGithub />
          </Button>
          Github
        </Link>
      </SectionLinks>

      <Section id="about">
        <Heading heading={Headings.h2} align={TextAlign.left}>Sobre mim</Heading>
        <p>Estudo software para a criação de soluções dinámicas, escaláveis e de fácil manutenção.</p>
      </Section>

      <Section id="projects">
        <Heading heading={Headings.h2} align={TextAlign.left}>Projetos</Heading>
        <ProjectCard
          img={"https://gcdnb.pbrd.co/images/59uAUzKvgdTY.png?o=1"}
          name={"Project #1 name"}
          description={"Descrição curta do projeto"}
          projectPageURL={"#"} />
      </Section>

      <Separator />

      <Footer>
        Design e front feito por mim XD.
      </Footer>
    </main>
  )
}
