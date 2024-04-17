import React from "react";
import "./ServiceItem.css";
import sub1 from "../../images/balloon.png"
import sub2 from "../../images/card1.jpeg"
import sub3 from "../../images/card2.jpeg"
import sub4 from "../../images/intro1.jpeg"


function ServiceItem(props)
{
    return(
        <div className="mt-4">
            <div className={`container flex-row-wrap flex-center col-12 col-md-9 ${props.imgRight ? "si-imgRight" : ""}`}>
                <div className="main-img-container col-12 col-md-4">
                    <img className="col-12" alt="si" src={props.mainImg} />
                </div>
                <div className="col-0 offset-md-1"></div>
                <div className="si-text-container p-2 col-12 col-md-7">
                    <h3>Service Name</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <p>Starting at $0.00</p>
                </div>
            </div>

            <div className="mt-4 container sub-img-container">
                <img className="col-6 col-md-3" alt="1" src={sub1} />
                <img className="col-6 col-md-3" alt="2" src={sub2} />
                <img className="col-6 col-md-3" alt="3" src={sub3} />
                <img className="col-6 col-md-3" alt="4" src={sub4} />
            </div>

            <hr />
        </div>
    );
}

export default ServiceItem;