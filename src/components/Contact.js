import { useEffect, useRef } from "react";
import "./css/Contact.css";

export default function Contact(props) {
    const contactRef = useRef();

    useEffect(() => {
        if (props.previousLoc === "/work") {
            contactRef.current.style.animationDelay = "0s";
        }
        props.setPreviousLoc("/contact");
    });
    
    return (
        <div id="contact-container" ref={contactRef}>
            <form action="mailto:ben.sommer.skovgaard@gmail.com" method="get">
                <h3>
                    If you would like to contact me regarding work, 
                    you can do so through my LinkedIn link on the home page
                    or by clicking the button below to send me an email.
                </h3>
                <input id="submit-btn" type="submit" value="Go" />
                <p>Alternatively, send it to <strong>ben.sommer.skovgaard@gmail.com</strong><br/> elsewhere if you prefer.</p>
            </form>
        </div>
    )
}