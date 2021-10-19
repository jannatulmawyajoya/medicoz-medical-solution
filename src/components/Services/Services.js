import React, { useEffect, useState } from 'react';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('./services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    console.log(services);
    return (
        <div className="main-container">
            <h1 className="services-container text-primary">Our Services</h1>
            <h4 className="mb-5">We are providing services for all ages.</h4>
            <div className="services">
                <div className="row">
                    {services.map((service) => (
                        <div className="col-md-4">
                            <div className="cart">
                                <div className="cart-img">
                                    <img className="w-50" src={service.img} alt="" />
                                </div>
                                <h2>{service.name}</h2>
                                <p>{service.description}</p>
                                <button className="btn btn-primary">SEE MORE</button>
                               
                            </div>
                        </div>))
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;