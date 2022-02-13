import React from "react";
import "../styles/Contact.css";
import ContatImage from "../assets/fooda.jpeg"

function Contact() {
    return (
        <div className="contact">
            <div className="leftSide" style={{backgroundImage: `url(${ContatImage})`}}>
                
            </div>

            <div className="rightSide">
                <h1>Contact us</h1>
                <form id="contact-form" method="POST">
                    <label htmlFor="name">Full Name</label>
                    <input name="name" type="text" placeholder="Enter your name" />

                    <label htmlFor="email">Email</label>
                    <input name="name" placeholder="Enter email address" type="email" />

                    <label htmlFor="message">Message</label>
                    <textarea name="message" placeholder="Enter your message" rows="4" />
                    
                    <button type="submit">Send Message</button>

                </form>
            </div>

        </div>
    )
}

export default Contact