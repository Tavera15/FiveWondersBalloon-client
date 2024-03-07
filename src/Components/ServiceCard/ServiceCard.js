import React from "react";
import { Button } from "react-bootstrap";
import img from "../../images/card2.jpeg"
import "./ServiceCard.css"

function ServiceCard()
{
    return(
        <div className="col-12 col-lg-3 col-md-3 col-sm-6 service-card">
            <div className="p-4 col-12">
                <img alt="1" src={img} className="col-12 service-card-img"/>
                <h3 className="mt-4">Service Title</h3>
            </div>
        </div>
    );
}

export default ServiceCard;