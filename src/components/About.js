import "./css/About.css";
import myPic from "../images/my-pic.jpg";
import codeIcon from "../images/code-icon.png"
import { useEffect, useRef } from "react";

export default function About(props) {
    const cSecListOne = ["React", "Vue", "JavaScript", "TypeScript", "Java", "C#", "Xamarin"];
    const cSecListTwo = ["Python", "Haskell", "MySQL", "Azure AD", "Travis CI", "Power BI", "Docker"];
    const aboutRef = useRef();

    useEffect(() => {
        if (props.previousLoc === "/") {
            aboutRef.current.style.animationDelay = "0s";
        }
        props.setPreviousLoc("/about");
    });

    return (
        <div id="about-container" ref={aboutRef}>
            <div>
                <img id="my-pic" src={myPic} alt="" />
                <p>I'm a full-stack developer from and located 
                    in Denmark - more specifically, on Bornholm.</p>
                <p>
                    My programming journey started back in 2019 when I 
                    spontaneously decided to undertake an AP Degree in CS
                    at Cphbusiness.
                </p>
                <p>
                    I had been struggling to figure out what I wanted to do for
                    a while, so I figured I might as well give it a chance and
                    see what happens.
                </p>
                <p>
                    What I didn't expect was how quickly I would take a liking to it. 
                    As my skills grew, so did my creativity - 
                    I started working on all sorts of little projects in my 
                    free time, and the more I learned and created, the more convinced I 
                    became that I had found my calling.
                </p>
                <p>
                    Today I am certain of that, and with my degree now 
                    completed, I am actively looking for an opportunity
                    to get my career in software development started.
                </p>
            </div>
            <div id="code-section">
                <img id="code-pic" src={codeIcon} alt="" />
                <p>Some of the languages, frameworks and 
                    technologies I have worked with 
                </p>
                <div>
                    <ul>
                        {cSecListOne.map(item => {
                            return (
                                <li key={item}>
                                    {item}
                                </li>
                            )
                        })}
                    </ul>
                    <ul>
                        {cSecListTwo.map(item => {
                            return (
                                <li key={item}>
                                    {item}
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}