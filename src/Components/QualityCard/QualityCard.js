import React from "react";
import { Button } from "react-bootstrap";
import img from "../../images/card2.jpeg";
import "./QualityCard.css";
import icon from "../../images/balloon.png";

function QualityCard()
{
    return(
        <div className="col-6 p-4 quality-card">

            <img className="service-icon" src={icon} alt="icon"/>

            <div>
               <h2>Title</h2>
               <p>Lorem ipsum dolor sit amet</p>
            </div>
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