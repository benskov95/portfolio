import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import "./css/Background.css";

export default function Background() {
    const loc = useLocation();
    const chevRef = useRef();
    
    useEffect(() => {
        switch(loc.pathname) {
            case "/":
                if (chevRef.current.id === "chevron") {
                    break;
                }
                chevRef.current.id = "chevron-right";
                break;
            case "/about":
                if (chevRef.current.id === "chevron") {
                    break;
                }
                chevRef.current.id = "chevron-right";
                break;
            case "/work":
                chevRef.current.id = "chevron-left";
                break;
            case "/contact":
                chevRef.current.id = "chevron-left";
                break;
            default:
                break;
        }
    }, [loc]);

    return (
        <>
            <img id="chevron" ref={chevRef} src="https://i.gifer.com/1ozr.gif" alt="" />
        </>
    )
}