import React from "react";
import "./HomePage.css";
import "../../images/introservices.jpeg";
import wwd from "../../images/introservices.jpeg"


function HomePage()
{
    return(
        <div>
            <div className="intro">
                <div className="intro-shade intro-text-container">
                    <h2>Decor 5Wonders</h2>
                    <h1>Houston's Balloons and Decor Services</h1>
                    <h3>For All Events!</h3>
                </div>
            </div>

            <div className="what-we-do">
                <h2 className="mb-5">We Love What We Do</h2>

                <div className=" details-box">
                    <div className="col-0 col-md-1 col-lg-2"></div>

                    <div className="col-12 col-md-5 col-lg-4">
                        <p className="details-text col-12">
                            We decorate for all types of events including: 
                            Birthdays, Graduations, Weddings, Grand Openings, Gender Reveals, Baby Showers, 
                            Bridal Showers, Retirement Parties, Corporate Events, Milestones, Reunions, and more! 
                            What kind of event are you having? Give us a call for the best balloon services in Houston!
                        </p>
                    </div>
                    
                    <div className="col-0 col-md-1 col-lg-1"></div>

                    <div className="col-12 col-md-4 col-lg-3">                    
                        <img className="col-10" src={wwd} alt="wwd"/>
                    </div>

                    <div className="col-0 col-md-1 col-lg-2"></div>
                </div>
            </div>

            <div className="specialties">

            </div>

            <div className="balloon-arcs">

            </div>

            <div className="balloon-garlands">

            </div>

            <div className="installations">

            </div>

            <div className="walls">

            </div>

            <div className="areas-of-service">

            </div>
        </div>
    )
}

export default HomePage;

/// https://htxballoondecoration.com