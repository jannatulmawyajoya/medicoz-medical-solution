import React from 'react';
import { Link } from 'react-router-dom';
import "./NotFound.css";

const NotFound = () => {
    return (
        <div className="row not-found-div">
            <div className="col-lg-12 ">
                <img className="page-not-found" src="https://thumbs.dreamstime.com/b/page-not-found-14904975.jpg" alt="" />
                <div>  <Link to="/"><button className="btn btn-primary mb-3">Go Back</button></Link></div>
              
            </div>
        </div>
    );
};

export default NotFound;