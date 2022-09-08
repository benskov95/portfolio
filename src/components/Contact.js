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
            <h3>If you would like to contact me regarding work, send me an email using the form below.</h3>
            <p>Alternatively, send it to <strong>ben.sommer.skovgaard@gmail.com</strong><br/> elsewhere if you prefer.</p>
            <form action="mailto:ben.sommer.skovgaard@gmail.com" method="GET">
                <input id="title-field" placeholder="Title" name="subject" type="text" /><br />
                <textarea id="content-field" placeholder="Content" name="body" /><br />
                <input id="submit-btn" type="submit" value="Send" />
            </form>
        </div>
    )
}