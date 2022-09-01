import "./css/Intro.css";

export default function Intro() {

    const stuff = () => {
        let dLeft = document.getElementById("door-left");
        let dRight = document.getElementById("door-right");
        let btn = document.getElementById("door-btn")
        dLeft.id = "door-left-moved";
        dRight.id = "door-right-moved";
        btn.id = "door-btn-moved";
    }

    return (
        <div id="intro-container">
            <div id="door-left" />
            <div id="door-btn" onClick={stuff} />
            <div id="door-right" />
        </div>
    )
}