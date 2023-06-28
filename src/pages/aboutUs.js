import React from "react";
import AboutusData from "../data/aboutus";
import '../CSS/style.css';
import '../CSS/index.css';
import '../CSS/aboutUs.css';


function AboutUs() {


    return (
        <>
            <div className="container-fluid py-5 second-one andhra_telangana">
            <div className="row">
            <div className="col-md-4">
                <div className="flashcard">
                    <img src={AboutusData.leftFlashcard.image} alt={AboutusData.leftFlashcard.alt} className="flashcard-image" />
                    <div className="flashcard-overlay">
                        <h5 className="flashcard-title flashcard-title-top-left">{AboutusData.leftFlashcard.title}</h5>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <section id="introduction">
                    <div className="introduction-container">
                        <div className="introduction-content">
                            <h3 className="discover_h1 header-discover">{AboutusData.introduction.title}</h3>
                            <p className="lead">{AboutusData.introduction.subtitle}</p>
                            <p>{AboutusData.introduction.description}</p>
                        </div>
                    </div>
                </section>
            </div>
            <div className="col-md-4">
                <div className="flashcard">
                    <img src={AboutusData.rightFlashcard.image} alt={AboutusData.rightFlashcard.alt} className="flashcard-image" />
                    <div className="flashcard-overlay">
                        <h5 className="flashcard-title flashcard-title-bottom-right">{AboutusData.rightFlashcard.title}</h5>
                    </div>
                </div>
            </div>
        </div>
            </div>
            <div className="container-fluid py-5 second-one">
                <div>
                    <h1 className="discover_h1 second-h1">Meet The Team</h1>
                </div>
            
            <div className="aboutUs-container">
                <div className="card card0">
                    <div className="border">
                    <h2 className="aboutus-h2">Rushendra Reddy</h2>
                    {/* <div className="icons">
                        <i className="fa fa-codepen" aria-hidden="true"></i>
                        <i className="fa fa-instagram" aria-hidden="true"></i>
                        <i className="fa fa-dribbble" aria-hidden="true"></i>
                        <span><i class="fa fa-linkedin" aria-hidden="true"></i></span>
                        <i className="fa fa-facebook" aria-hidden="true"></i>
                    </div> */}
                    </div>
                </div>
                <div className="card card1">
                    <div className="border">
                    <h2 className="aboutus-h2">Tejesh Babu</h2>
                    </div>
                </div>
                <div className="card card2">
                    <div className="border">
                    <h2 className="aboutus-h2">Stephen</h2>
                    </div>
                </div>
            </div>
            </div>
            {/* <Footer/> */}
        </>

    );
}

export default AboutUs;
