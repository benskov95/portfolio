import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router";
import "./css/Navbar.css";

export default function Navbar() {
    const [activeBtn, setActiveBtn] = useState("1");
    const loc = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        matchBtnWithPath();
    }, []);

    const matchBtnWithPath = () => {
        switch(loc.pathname) {
            case "/":
                setActiveBtn("1");
                break;
            case "/work":
                setActiveBtn("2");
                break;
            case "/about":
                setActiveBtn("3");
                break;
            case "/contact":
                setActiveBtn("4");
                break;
            default:
                break;
        }
    }

    const gotoPage = (e) => {
        let id = e.target.name;
        setActiveBtn(id);
        switch(id) {
            case "1":
                navigate("/");
                break;
            case "2":
                navigate("/work");
                break;
            case "3":
                navigate("/about");
                break;
            case "4":
                navigate("/contact");
                break;
            default:
                break;
        }
    }

    return (
        <div id="navbar-container">
            <button className={activeBtn === "1" ? "nav-btn-active" : "nav-btn"} name="1" onClick={gotoPage}>Home</button>
            <button className={activeBtn === "2" ? "nav-btn-active" : "nav-btn"} name="2" onClick={gotoPage}>Work</button>
            <button className={activeBtn === "3" ? "nav-btn-active" : "nav-btn"} name="3" onClick={gotoPage}>About</button>
            <button className={activeBtn === "4" ? "nav-btn-active" : "nav-btn"} name="4" onClick={gotoPage}>Contact</button>
        </div>
    )
}