import React from "react";
import "./ServicesPage.css";
import ServiceItem from "../../Components/Service Item/ServiceItem";
import mainImg from "../../images/introservices.jpeg";
import sub1 from "../../images/balloon.png"
import sub2 from "../../images/card1.jpeg"
import sub3 from "../../images/card2.jpeg"
import sub4 from "../../images/intro1.jpeg"

function ServicesPage()
{
    return(
        <div>
            <h1>Services</h1>
            
            <div className="services-intro">
                
            </div>

            <div className="services-process">

            </div>

            <div className="list-of-services">
                <ServiceItem imgRight={false} mainImg={mainImg} />
                <ServiceItem imgRight={true} mainImg={sub1} />
                <ServiceItem imgRight={false} mainImg={sub2} />
                <ServiceItem imgRight={true} mainImg={sub3} />
                <ServiceItem imgRight={false} mainImg={sub4} />
            </div>
        </div>
    );
}

export default ServicesPage