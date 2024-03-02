import React from "react";
import "./HomePage.css";
import "../../images/introservices.jpeg";
import wwd from "../../images/introservices.jpeg"
import logo from "../../images/logo.jpeg"
import { Button } from "react-bootstrap";


function HomePage()
{
    return(
        <div>
            <div className="intro">
                <div className="intro-shade">
                    <div className="container intro-text-container">
                        <h2>5Wonders Balloons</h2>
                        <h1>We Make the Party Pop!</h1>
                        <Button className="btn btn-secondary">See More</Button>
                    </div>
                </div>
            </div>

            <div className="what-we-do">
                <h2 className="mb-5">We Love What We Do</h2>

                <div className="container mb-4">
                    <div className="details-card p-4 container col-12 col-md-10">
                        <div className="col-12 col-md-5">
                            <p className="details-text col-12">
                                We decorate for all types of events including: 
                            </p>
                            
                            <p>We specialize in kdjshf sf s sdsf wef sdf asd sgv sdf ef asdcv sdf gfd  vdgf sdfv drg sdfvsv sf f</p>
                            
                            
                        </div>

                        <div className="col-1 col-md-0"></div>

                        <div className="col-12 col-md-5 details-card-img">
                            <img className="col-10" src={logo} alt="logo"/>
                        </div>
                    </div>
                </div>





                <div className=" details-box">
                    <div className="col-0 col-md-0 col-lg-0 col-xl-2"></div>

                    <div className="col-12 col-md-6 col-lg-6 col-xl-4">
                        <p className="details-text col-12">
                            We decorate for all types of events including: 
                        </p>
                        
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Birthdays</li>
                            <li className="list-group-item">Graduations</li>
                            <li className="list-group-item">Weddings</li>
                            <li className="list-group-item">Baby Showers</li>
                            <li className="list-group-item">Gender Reveals</li>
                            <li className="list-group-item">Grand Openings</li>
                            <li className="list-group-item">Reunions</li>
                            <li className="list-group-item">Milestones</li>
                            <li className="list-group-item">and more!</li>
                        </ul>
                    </div>
                    
                    <div className="col-0 col-md-1 col-lg-1 col-xl-1"></div>

                    <div className="col-12 col-md-5 col-lg-5 col-xl-3">                    
                        <img className="col-12 col-lg-12 col-xl-12" src={wwd} alt="wwd"/>
                    </div>

                    <div className="col-0 col-md-0 col-lg-0 col-xl-"></div>
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