import { useEffect, useRef, useState } from "react";
import "./css/Work.css";
import workList from "../utils/workList";

export default function Work(props) {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slideRef = useRef();
    const workRef = useRef();

    useEffect(() => {
        if (props.previousLoc === "/contact") {
            workRef.current.style.animationDelay = "0s";
        }
        props.setPreviousLoc("/work");
    });

    const getNewSlide = (e) => {
        let id = e.target.id;
        let newSlide;
        slideRef.current.id = slideRef.current.id === "slide-a" ? "slide-b" : "slide-a";

        if (id === "next") {
            newSlide = currentSlide >= workList.length - 1 ? 0 : currentSlide + 1;
            setCurrentSlide(newSlide);
            return;
        }
        newSlide = currentSlide <= 0 ? workList.length - 1 : currentSlide - 1;
        setCurrentSlide(newSlide);
    }

    return (
        <div id="work-container" ref={workRef}>
            <p>
                These are some of the applications I have built. 
                Click the image to visit the project being displayed.
            </p>
            <div id="carousel">
                <div id="slide-a" ref={slideRef}>
                    <a href={workList[currentSlide].link} title="Click to visit" target="_blank" rel="noreferrer">
                        <img src={workList[currentSlide].image} alt="" />
                    </a>
                </div>
                <br />
                <div id="btn-container">
                    <button onClick={getNewSlide} id="prev">❮</button>
                    <h3>{currentSlide + 1} / {workList.length}</h3>
                    <button onClick={getNewSlide} id="next">❯</button>
                </div>
                <h2>{workList[currentSlide].title}</h2>
                <p dangerouslySetInnerHTML={{__html: workList[currentSlide].desc}} />
            </div>
        </div>
    )
}