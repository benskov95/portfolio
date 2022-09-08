import "./css/Home.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useEffect, useRef } from "react";

export default function Home(props) {
    const homeRef = useRef();

    useEffect(() => {
        if (props.previousLoc === "/about") {
            homeRef.current.style.animationDelay = "0s";
        }
        props.setPreviousLoc("/");
    });

    return (
        <div id="home-container" ref={homeRef}>
            <h2>Hello, I'm</h2>
            <h1>Benjamin Skovgaard.</h1>
            <p>I'm a full-stack developer with a passion for the process of bringing ideas to <strong>life</strong>.</p>
            <div id="links-container">
                <a href="https://github.com/benskov95" target="_blank" rel="noreferrer">
                    <FaGithub size="3rem" />
                </a>
                <a href="https://www.linkedin.com/in/benjamin-sommer-skovgaard/" target="_blank" rel="noreferrer">
                    <FaLinkedin size="3rem" />
                </a>
            </div>
        </div>
    )
}