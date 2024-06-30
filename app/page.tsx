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
import Paragraph from "./Components/Paragraph";
import { PageInfo } from "./core/dataTypes/pageInfo";
import { getInfos } from "./utils/gettters/getInfos";

const headerSectionStyle = {
  gap: '3rem'
}

const sobreSectionStyle = {
  alignItems: 'start'
}

export default async function Home() {
  const infos: PageInfo = await getInfos();
  const noProjects: boolean = infos.projects.length < 1

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

            <Link href={infos.links.linkedin}>
              <Button disabled={false} filled={false}>
                <BiLogoLinkedin />
              </Button>
              Linkedin
            </Link>

            <Link href={infos.links.github}>
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
        {JSON.stringify(infos.about).replaceAll("\"", "").split('\\n').map(p => <Paragraph text={p} />)}
      </Section>

      <Section id="projects">
        <Heading heading={Headings.h2} align={TextAlign.left}>Projetos</Heading>
        {noProjects
          ? "Nenhum projeto cadastrado."
          : <ProjectCard
          img={"https://gcdnb.pbrd.co/images/59uAUzKvgdTY.png?o=1"}
          name={"Project #1 name"}
          description={"Descrição curta do projeto"}
          projectPageURL={"#"} />
        }
      </Section>

      <SectionContact />

      <Separator />

      <Footer>
        Design e front feito por mim XD.
      </Footer>
    </main>
  )
}
