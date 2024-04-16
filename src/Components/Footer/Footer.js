import React from "react";
import logo from "../../images/logo.jpeg";
import { Button } from "react-bootstrap";
import "./Footer.css";
import ig from "../../images/instagram.png";

function Footer()
{
    return(
        <div className="p-4 pt-">
                <div className="col-12 inner-footer flex-row-wrap">

                    <div className="col-6 col-md-3 p-4 footer-border border-circle">
                        <h4>Contact</h4>
                        <p>email</p>
                        <p>phone</p>
                    </div>

                    <div className="col-6 col-md-3 p-4 footer-border border-start-0">
                        <h4>Inquiries</h4>
                        <p>To get a quote fill out our inquiry form</p>
                    </div>

                </div>

                <div className="col-12 inner-footer flex-row-wrap">
                    <div className="col-md-6 col-12 p-4 flex-row-wrap flex-center sm footer-border border-top-0">

                        <img className="col-2 col-sm-1" src={ig} alt="sm-1"/>
                        <img className="col-2 col-sm-1" src={ig} alt="sm-2"/>
                        <img className="col-2 col-sm-1" src={ig} alt="sm-3"/>
                        <img className="col-2 col-sm-1" src={ig} alt="sm-4"/>

                    </div>
                </div>

            </div>
    )
}

export default Footer;