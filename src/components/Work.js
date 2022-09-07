import { useState } from "react";
import "./css/Work.css";

export default function Work() {
    const imgLinks = ["https://randomwordgenerator.com/img/picture-generator/54e7d04a4d55b10ff3d8992cc12c30771037dbf85257714d702672d7934f_640.jpg", "https://images.unsplash.com/photo-1494253109108-2e30c049369b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHJhbmRvbS4uLnxlbnwwfHwwfHw%3D&w=1000&q=80", "https://randomwordgenerator.com/img/picture-generator/g33815e6df811c258a606a9a313eb798de88de92031fc196fe0bb1d4bd4fa6be7c59d43cfbfedd1268b185db543d21ba8_640.jpg"];
    const [currentSlide, setCurrentSlide] = useState(0);

    const test = (e) => {
        let id = e.target.id;
        let newSlide;
        let el = document.getElementById("slide");

        el.scrollBy({left: 700, behavior: "smooth"})

        // if (id === "next") {
        //     newSlide = currentSlide >= imgLinks.length - 1 ? 0 : currentSlide + 1;
        //     setCurrentSlide(newSlide);
        //     return;
        // }
        // newSlide = currentSlide <= 0 ? imgLinks.length - 1 : currentSlide - 1;
        // setCurrentSlide(newSlide);
    }

    return (
        <div id="work-container">
            <div id="slide">
                <a href="https://github.com/" target="_blank" rel="noreferrer">
                    <img src={imgLinks[currentSlide]} alt="" />
                </a>
                {/* <a href="https://github.com/" target="_blank" rel="noreferrer">
                    <img src={imgLinks[currentSlide]} alt="" />
                </a>
                <a href="https://github.com/" target="_blank" rel="noreferrer">
                    <img src={imgLinks[currentSlide]} alt="" />
                </a> */}
                <br />
                <div style={{display: "flex", justifyContent: "center"}}>
                    <button onClick={test} id="prev">❮</button>
                    <h3>{currentSlide + 1} / {imgLinks.length}</h3>
                    <button onClick={test} id="next">❯</button>
                </div>
                <p>Some description here</p>
            </div>
        </div>
    )
}