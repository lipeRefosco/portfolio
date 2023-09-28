import "./style.css"
import FelipeLogo from "../../assets/felipe.svg";

export default function Logo() {
    return <img className="logo" src={FelipeLogo.src} alt="felipe" />
}