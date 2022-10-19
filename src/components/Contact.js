import { useEffect, useRef, useState } from "react";
import "./css/Contact.css";
import emailjs from "@emailjs/browser";

export default function Contact(props) {
    const contactRef = useRef();
    const form = useRef();
    const [email, setEmail] = useState({userEmail: "", subject: "", message: ""})
    const [status, setStatus] = useState({statusMsg: "", didSend: false});

    useEffect(() => {
        if (props.previousLoc === "/work") {
            contactRef.current.style.animationDelay = "0s";
        }
        props.setPreviousLoc("/contact");
    });

    const handleChange = (e) => {
        setEmail({...email, [e.target.name]: e.target.value});
        setStatus({...status, statusMsg: ""});
    }

    const sendEmail = async (e) => {
        e.preventDefault();
        let isFormValid = validateForm();
        let newStatus = {...status};

        if (isFormValid) {
            const res = await emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_PUBLIC_KEY);
            if (res.status === 200) {
                newStatus.didSend = true;
                newStatus.statusMsg = "Thank you, your email has been sent. I will get back to you as soon as possible.";
                setStatus(newStatus);
                return;
            }
            newStatus.didSend = false;
            newStatus.statusMsg = "An error occurred when trying to send your email. Please try again later.";
        }
    }

    const validateForm = () => {
        const emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
        let newStatus = {...status};

        if (!email.userEmail.match(emailRegex)) {
            newStatus.didSend = false;
            newStatus.statusMsg = "Please use a valid email address";
            setStatus(newStatus);
            return false;
        }

        if (email.subject.length < 1 || email.message.length < 1) {
            newStatus.didSend = false;
            newStatus.statusMsg = "Subject or message field is empty.";
            setStatus(newStatus);
            return false;
        }

        return true;
    }
    
    return (
        <div id="contact-container" ref={contactRef}>
            <h3>
                If you would like to contact me regarding work, 
                you can do so through my LinkedIn link on the home page
                or by clicking the button below to send me an email.
            </h3>
            <p>
                Alternatively, send it to <strong>ben.sommer.skovgaard@gmail.com</strong><br/> elsewhere if you prefer.
            </p>
            <form ref={form} onSubmit={sendEmail}>
                <input 
                className="form-field" 
                placeholder="Your email address" 
                name="userEmail" 
                type="text" 
                onChange={handleChange}
                value={email.userEmail} /><br />

                <input 
                className="form-field" 
                placeholder="Subject" 
                name="subject" 
                type="text" 
                onChange={handleChange}
                value={email.subject} /><br />

                <textarea 
                id="message-field" 
                placeholder="Your message" 
                spellCheck={false}
                name="message" 
                onChange={handleChange}
                value={email.message} /><br />

                <p style={{fontSize: "1rem", color: status.didSend ? "lime" : "lightcoral"}}>
                    {status.statusMsg}
                </p>
                <input id="submit-btn" type="submit" value="Send" />
            </form>
        </div>
    )
}