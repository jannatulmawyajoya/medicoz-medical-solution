import React, { useEffect, useState } from 'react';
import "./Department.css";

const Department = () => {
    const [departments, setDepartments] = useState([])
    useEffect(() => {
        fetch('./departments.json')
            .then(res => res.json())
            .then(data => setDepartments(data))
    }, [])
    
    return (
        <div className="main-container">
            <h1 className="services-container text-primary mb-5">Our Departments</h1>
            
            <div className="departments">
                <div className="row">
                    {departments.map((department) => (
                        <div key={department.key} className="col-md-4">
                            <div className="department-cart">
                                <div className="cart-img">
                                    <img className="w-50" src={department.img} alt="" />
                                </div>
                                <h2>{department.name}</h2>
                                <p>{department.description}</p>
                                


                            </div>
                        </div>))
                    }
                </div>
            </div>
        </div>
    );
};

export default Department;