import React from 'react';
import "./ContactUs.css";

const ContactUs = () => {
    return (
        <div className="contact-div">
            <h1 className="mb-5">Write Us a Message!!!</h1>

            <div className="row">
                <div className="col-lg-4">
                    <h3 className="text-primary">Address</h3>
                    <p>185, Pickton Near Street,
                        Los Angeles, USA</p>
                </div>
                <div className="col-lg-4">
                    <h3 className="text-primary">Phone</h3>
                    <p>(+92) 313 888 000 </p>
                

                      <p>  (+92) 313 999 000</p>

                </div>
                <div className="col-lg-4">
                    <h3 className="text-primary">Email</h3>
                    <p>support@example.com</p>
                    <p>help@example.com</p>

                </div>
            </div>
        </div>
    );
};

export default ContactUs;