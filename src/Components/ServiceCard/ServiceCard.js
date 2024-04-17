import React from "react";
import "./ServiceCard.css";
import temp from "../../images/card2.jpeg";

function ServiceCard(props)
{
    return(
        
        <div className="col-12 col-lg-3 col-sm-6 p-4 service-card">
            <div className="">
                <img className="col-12" src={temp} alt="icon" />
            </div>

            <div className="mt-4">
                <h2>Title</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
        </div>
    );
}

export default ServiceCard;