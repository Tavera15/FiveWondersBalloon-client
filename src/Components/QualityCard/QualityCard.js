import React from "react";
import { Button } from "react-bootstrap";
import img from "../../images/card2.jpeg"
import "./QualityCard.css"

function QualityCard()
{
    return(
        <div className="col-12 col-sm-6 p-4 service-card">
            <div className="service-card-icon">

            </div>
            <h2>Title</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
    );
        {/*
        <div className="col-12 col-lg-3 col-md-3 col-sm-6 service-card">
        <div className="p-4 col-12">
        <img alt="1" src={img} className="col-12 service-card-img"/>
        <h3 className="mt-4">Service Title</h3>
        </div>
        </div>
        */}
}

export default QualityCard;