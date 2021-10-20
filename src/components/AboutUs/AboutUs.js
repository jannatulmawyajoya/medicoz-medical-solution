import React from 'react';
import "./AboutUs.css";

const AboutUs = () => {
    return (
        <div className="about-div">
            <div className="row">
                <div className="col-lg-5 col-12">
                    <img src="http://ary-themes.com/html/bold_touch/medicoz/images/resource/image-3.png" alt="" />
                </div>
                <div className="col-lg-7 col-12 mt-5 p-3 ">
                    <h2>We're setting Standards in Research what's more, Clinical Care.</h2>
                    
                    <p>We provide the most full medical services, so every person could have the opportunity o receive qualitative medical help.</p>
                    <p>Our Clinic has grown to provide a world class facility for the treatment of tooth loss, dental cosmetics and bore advanced restorative dentistry. We are among the most qualified implant providers in the AUS with over 30 years of uality training and experience.</p>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;