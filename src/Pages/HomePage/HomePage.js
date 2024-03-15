import React from "react";
import "./HomePage.css";
import "../../images/introservices.jpeg";
import wwd from "../../images/card1.jpeg"
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

            {/*
            <div className="promo">
                <p>Promo goes here dfgegf erger gergerg ergerge rgergerg ergerg erger gergergerg f 5t4t3ew r3t3 tt534 t3t5 t35t35terg ergetge </p>
            </div>


                <div className="container about-us p-4">

                <div className="col-12 col-sm-3">
                    <img className="col-12" alt="about-1" src={wwd}/>
                </div>

                <div className="about-us-content col-12 col-sm-6">
                    <h1>Balloon Decor based in Houston, TX</h1>
                </div>
                
                <div className="col-12 col-sm-3">
                    <img className="col-12" alt="about-2" src={wwd}/>
                    </div>
                    </div>
                    
            
            <div className="bg-pic mb-4">
                <div className="specialties pt-4">
                    <h2>Balloon Decor Services</h2>

                    <div className="services-list container">
                        <ServiceCard />
                        <ServiceCard />
                        <ServiceCard />
                        <ServiceCard />
                    </div>
                </div>
            </div>
        */}

        <div className="pt-4 pb-4 list-of-servgices">
            <h1>Our Services</h1>

            <div className="grid-services zig-zag-services white-pink-gradient">
                <div className="container">
                    <ServiceCard zzLeft={true} />
                    <ServiceCard zzLeft={false} />
                    <ServiceCard zzLeft={true} />
                    <ServiceCard zzLeft={false} />
                </div>
            </div>
        </div>


        <div className="descriptions pt-4 pb-4">

            <div className="container grid-services mb-4">
                <QualityCard />
                <QualityCard />
                <QualityCard />
                <QualityCard />
            </div>

            <div className="what-we-do">
                
                <div className="container">
                    <div className="details-card p-4 container col-12 col-md-10">
                        <div className="col-12 col-md-5">
                            <h2 className="details-text col-12">
                                About Me
                            </h2>
                    
                            <p>We specialize in kdjshf sf s sdsf wef sdf asd sgv sdf ef asdcv sdf gfd  vdgf sdfv drg sdfvsv sf f</p>
                        </div>
                        <div className="col-0 col-md-1"></div>
                        <img className="col-8 col-md-5 details-card-img" src={wwd} alt="logo"/>
                    </div>
                </div>
            
            </div>
            
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