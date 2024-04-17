import React from "react";
import "./QualityCard.css";
import icon from "../../images/balloon.png";

function QualityCard()
{
    return(
        <div className="col-6 p-4 pb-0 quality-card">

            <img className="service-icon" src={icon} alt="icon"/>

            <div>
               <h2>Title</h2>
               <p>Lorem ipsum dolor sit amet</p>
            </div>
        </div>
    );
}

export default QualityCard;