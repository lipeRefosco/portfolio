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
  gap: '3rem'
}

const sobreSectionStyle = {
  alignItems: 'start'
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

      <Section id="about" style={sobreSectionStyle}>
        <Heading heading={Headings.h2} align={TextAlign.left}>Sobre mim</Heading>
        <p>Olá, tudo bem?</p>
        <p>Sou estudante de Engenharia de Software em busca de estágio na área.</p>
        <p>Busco aplicar meus conhecimentos em projetos desafiadores, colaborando com uma equipe dedicada e comprometida com a excelência técnica.</p>
        <p>Meu objetivo é contribuir com soluções inovadoras enquanto aprimoro minhas habilidades práticas e adquiro experiência na indústria.</p>
        <p>Estou pronto para enfrentar novos desafios e trazer entusiasmo e criatividade para qualquer time.</p>
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
