import "./page.css";
import Header from "./Componenets/Header";
import Logo from "./Componenets/Logo";
import Menu from "./Componenets/Menu";
import MenuButton from "./Componenets/MenuButton";
import Link from "./Componenets/Link";
import Button from "./Componenets/Button";
import Section from "./Componenets/Section";
import SectionLinks from "./Componenets/SectionLinks";
import ProjectCard from "./Componenets/ProjectCard";
import Separator from "./Componenets/Separator";
import { Heading, Headings } from "./Componenets/Headings";
import { TextAlign } from "./Aligns";
import Footer from "./Componenets/Footer";
import Form from "./Componenets/Form";
import Input from "./Componenets/Input";
import { BiLogoGithub, BiLogoLinkedin } from "react-icons/bi";
import Checkbox from "./Componenets/Checkbox";


export default function Home() {
  return (
    <main className="main">
      <Header>
        <p>Olá! Me chamo</p>
        <Logo />
        <p>
          Estudante de <br />
          Engenharia de Software
        </p>
      </Header>

      <Menu>
        <Link href="#about"><MenuButton>Sobre mim</MenuButton></Link>
        <Link href="#projects"><MenuButton>Veja meus projetos</MenuButton></Link>
        <Link href="#contact"><MenuButton>Entre em contato</MenuButton></Link>
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

      <Section id="contact">
        <Heading heading={Headings.h2} align={TextAlign.center}>Oi recruter!</Heading>
        <p>Preencha o formulário para baixar o meu currículo.</p>
        <Form>
          <Input type="text" id="nome" label="Nome:" />
          <Input type="email" id="email" label="E-mail:" />
          <Checkbox id="termos" text="Aceita os termos blabla ..."/>
          <Button filled={true}>Baixar currículo</Button>
        </Form>
      </Section>

      <Separator />

      <Footer>
        Design e front feito por mim XD.
      </Footer>
    </main>
  )
}
