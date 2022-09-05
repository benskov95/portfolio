import "./css/Home.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Home() {
    return (
        <div id="home-container">
            <h1 id="home-title">Hi, I'm Benjamin.</h1>
            <p>I'm a full stack developer with a passion for the process of bringing ideas to <strong>life</strong>.</p>
            <div id="links-container">
                <a href="https://github.com/benskov95" target="_blank">
                    <FaGithub size="3rem" />
                </a>
                <a href="https://www.linkedin.com/in/benjamin-sommer-skovgaard/" target="_blank">
                    <FaLinkedin size="3rem" />
                </a>
                <form action="mailto:ben.sommer.skovgaard@gmail.com" method="GET">
                    <button type="submit" style={{position: "absolute", width: "4rem", height: "4rem", opacity: "0", cursor: "pointer"}} />
                    <FaEnvelope size="3rem" /> 
                </form>
            </div>
        </div>
    )
}