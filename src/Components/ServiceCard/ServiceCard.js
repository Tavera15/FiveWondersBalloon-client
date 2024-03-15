import React from "react";
import "./ServiceCard.css";
import temp from "../../images/card2.jpeg";

function ServiceCard(props)
{
    return(
        <div className={`service-card " + ${props.zzLeft ? "zz-left" : ""}`}>
            <div className="p-4 col-12 col-sm-5">
                <img className="col-12" src={temp} />
            </div>

            <div className="p-1 col-12 col-sm-7">
                <h2>Title</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
        </div>
    );
}

export default ServiceCard;