import React from "react";
import logo from "../../images/logo.jpeg";
import "./Footer.css";

function Footer()
{
    return(
        <div className="p-4 footer">
            <div className="container inner-footer">
                <div className="footer-img-container">
                    <img alt="logo" src={logo} />
                </div>
                <h3>Book Today: 000-000-0000</h3>
            </div>
        </div>
    )
}

export default Footer;