import { Facebook, Instagram, LinkedIn, Twitter } from "@mui/icons-material";
import React from "react";
import "../styles/Footer.css"

function Footer() {
    return (
        <div className="footer">
            <div className="socialMedia">
                <Instagram />
                <Twitter />
                <Facebook />
                <LinkedIn />
            </div>
            <p>© 2021 continentalfood.com</p>

        </div>
    )
}

export default Footer