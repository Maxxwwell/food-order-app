import React from "react";
import AboutImage from "../assets/photo.jpeg";
import "../styles/About.css";

function About() {
    return (
        <div className="about">
            <div className="aboutTop" style={{ backgroundImage: `url(${AboutImage})` }}
            ></div>

            <div className="aboutBottom">
                <h1>About us</h1>
                <p>
                    Today, there are many dummy/filler text generators to choose from, so you don’t necessarily need to use Lorem ipsum. There’s, for example, Corporate ipsum which is based off of business terminologies. Or Cupcake ipsum for those who love baked goods.
                    Today, there are many dummy/filler text generators to choose from, so you don’t necessarily need to use Lorem ipsum. There’s, for example, Corporate ipsum which is based off of business terminologies. Or Cupcake ipsum for those who love baked goods.
                    Today, there are many dummy/filler text generators to choose from, so you don’t necessarily need to use Lorem ipsum. There’s, for example, Corporate ipsum which is based off of business terminologies. Or Cupcake ipsum for those who love baked goods.

                </p>
            </div>
        </div>
    )
}

export default About