import React, { useEffect, useState } from 'react';
import './MoreServices.css';


const MoreServices = () => {
    const [moreServices, setMoreServices] = useState([])
    useEffect(() => {
        fetch('./services.json')
            .then(res => res.json())
            .then(data => setMoreServices(data))
    }, [])
    return (
        <div className="moreservices-div">
         
           <div>
                <div className="row">
                    <div className="col-lg-9">
                        <img className="img-fluid" src="https://vertassets.blob.core.windows.net/image/6c0594d1/6c0594d1-a933-43a1-bf49-7fe16d202048/88a14fe1.jpg" alt="" />
                    </div>
                    <div className="col-lg-3 mt-5">
                        <h2 className="text-primary">We offer extensive medical procedures to outbound & inbound patients what it is and we are very proud achievement staff</h2>
                    </div>
                </div>
           </div>
            <h1 className="mt-5 text-primary">More Services </h1>
            <div className="services-div">
                <div className="row">
                    {moreServices.map((service) => (
                        <div key={service.key} className="col-md-4">
                            <div className="moreServices-cart">
                                <div className="cart-img">
                                    <img className="w-50" src={service.img} alt="" />
                                </div>
                                <h2>{service.name}</h2>
                                <p>{service.description}</p>
                                


                            </div>
                        </div>))
                    }
                </div>
            </div>
            <h2 className="text-primary">Whats Our Patients Says</h2>
            <div className="row">
                <div className="col-lg-8 p-5 text-secondary">
                    <h4>Medical Centre is a great place to get all of your medical needs. I came in for a check up and did not wait more than 5 minutes before I was seen. I can only imagine the type of service you get for more serious issues. Thanks!</h4>
                </div>
                <div className="col-lg-4 mt-5">
                    <img src="http://ary-themes.com/html/bold_touch/medicoz/images/resource/testi-thumb-3.jpg" alt="" />
                </div>
                <hr />
                <div className="col-lg-4 mt-5">
                    <img src="http://ary-themes.com/html/bold_touch/medicoz/images/resource/testi-thumb-2.jpg" alt="" />
                </div>
                <div className="col-lg-8 p-5 text-secondary">
                    <h4>Medical Centre is a great place to get all of your medical needs. I came in for a check up and did not wait more than 5 minutes before I was seen. I can only imagine the type of service you get for more serious issues. Thanks!</h4>
                </div>

            </div>
        </div>
    );
};

export default MoreServices;