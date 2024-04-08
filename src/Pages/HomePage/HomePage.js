import React from "react";
import "./HomePage.css";
import "../../images/introservices.jpeg";
import wwd from "../../images/card1.jpeg"
import wwd2 from "../../images/card2.jpeg"
import logo from "../../images/logo.jpeg"
import { Button } from "react-bootstrap";
import QualityCard from "../../Components/QualityCard/QualityCard";
import ServiceCard from "../../Components/ServiceCard/ServiceCard";


function HomePage()
{
    return(

        <div>
            <div className="intro">
                <div className="intro-shade">
                    <div className=" intro-text-container">
                        <h2 className="business-name">5Wonders Balloons</h2>
                        <h1 className="subheader">We Make the Party Pop!</h1>
                        <Button className="btn btn-secondary">See More</Button>
                    </div>
                </div>
            </div>

        <div className="pt-4 list-of-services">
            <h1>Our Services</h1>

            <div className="white-pink-gradient">
                <div className="p-4 container flex-row-wrap">
                    <ServiceCard />
                    <ServiceCard />
                    <ServiceCard />
                    <ServiceCard />
                </div>
            </div>
        </div>

        <div className="our-work">
            <div className="container">
                <h1 className="mb-5">Our Work</h1>
                <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="true">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={wwd} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={wwd2} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={logo} className="d-block w-100" alt="..." />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>

        <div className="descriptions pt-5 pb-5">

            <div className="what-we-do">
                
                <div className="container">
                    <div className="what-we-do details-card">
                        <div className="p-4 intro-shade flex-row-wrap flex-center inner-details-card col-12 col-md-10">

                        <div className="col-12 col-md-5 details-text-box">
                            <h1 className="details-text col-12">
                                About Me
                            </h1>
                    
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                        </div>
                        <div className="col-0 col-md-1"></div>
                            <img className="col-10 col-md-4 round-img" src={wwd} alt="logo"/>
                        </div>
                    </div>
                </div>
            
            </div>
            <div className="container mt-5 flex-row-wrap">
                <QualityCard />
                <QualityCard />
                <QualityCard />
                <QualityCard />
            </div>
            
        </div>

        
        
        {/*
            <div className="welcome">
                <div className="balloon-strip">
                    <img alt="wlc" src={wwd2}/>
                </div>


                <div className="container col-12 balloon-strip-inner ">

                    <div className="col-12 col-md-6 x">

                        <div className="col-12 col-md-6 intro-img-container">
                            <img className="col-12 intro-img" alt="wlc" src={wwd}/>
                        </div>

                        <div className="col-12 col-md-6 intro-text-box ">
                            <div className="intro-inner-text">
                                <h1>Welcome</h1> 
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

        */}
        </div>
    )
}

export default HomePage;

/// https://htxballoondecoration.com
/// https://wowlloons.com