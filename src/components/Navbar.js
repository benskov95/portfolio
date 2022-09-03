import { useRef } from "react";
import "./css/Navbar.css";

export default function Navbar() {
    const btnOne = useRef(null);
    const btnTwo = useRef(null);
    const btnThree = useRef(null);

    const setBtnActive = (e) => {
        switch(e.target.id) {
            case "1":
                btnOne.current.className = "nav-btn-active";
                btnTwo.current.className = "nav-btn";
                btnThree.current.className = "nav-btn";
                break;
            case "2":
                btnOne.current.className = "nav-btn";
                btnTwo.current.className = "nav-btn-active";
                btnThree.current.className = "nav-btn";
                break;
            case "3":
                btnOne.current.className = "nav-btn";
                btnTwo.current.className = "nav-btn";
                btnThree.current.className = "nav-btn-active";
                break;
            default:
                break;
        }
    }

    return (
        <div id="navbar-container">
            <button className="nav-btn" id="1" onClick={setBtnActive} ref={btnOne}>Work</button>
            <button className="nav-btn" id="2" onClick={setBtnActive} ref={btnTwo}>About</button>
            <button className="nav-btn" id="3" onClick={setBtnActive} ref={btnThree}>Contact me</button>
        </div>
    )
}