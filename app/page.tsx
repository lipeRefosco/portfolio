import "./page.css";
import Header from "./Components/Header";
import Logo from "./Components/Logo";
import Menu from "./Components/Menu";
import MenuButton from "./Components/MenuButton";
import Link from "./Components/Link";
import Button from "./Components/Button";
import Section from "./Components/Section";
import ProjectCard from "./Components/ProjectCard";
import Separator from "./Components/Separator";
import { Heading, Headings } from "./Components/Headings";
import { TextAlign } from "./Aligns";
import Footer from "./Components/Footer";
import { BiLogoGithub, BiLogoLinkedin } from "react-icons/bi";
import SectionContact from "./Components/SectionContact";


const headerSectionStyle = {
  justifyContent: 'center',
  gap: '3rem'
}

export default function Home() {
  return (
    <main className="main">
      <Header>
        <Section style={headerSectionStyle}>
          <div>
            <p>Olá! Me chamo</p>
            <Logo />
            <p>Estudante de <br />Engenharia de Software</p>
          </div>

          <Menu>
            <Link href="#about"><MenuButton>Sobre mim</MenuButton></Link>
            <Link href="#projects"><MenuButton>Veja meus projetos</MenuButton></Link>
            <Link href="#contact"><MenuButton>Entre em contato</MenuButton></Link>
          </Menu>

          <div>
            <Heading heading={Headings.h6} align={TextAlign.center}>Links</Heading>

            <Link href="#">
              <Button disabled={false} filled={false}>
                <BiLogoLinkedin />
              </Button>
              Linkedin
            </Link>

            <Link href="#">
              <Button disabled={false} filled={false}>
                <BiLogoGithub />
              </Button>
              Github
            </Link>
          </div>
        </Section>
      </Header>

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

      <SectionContact />

      <Separator />

      <Footer>
        Design e front feito por mim XD.
      </Footer>
    </main>
  )
}
