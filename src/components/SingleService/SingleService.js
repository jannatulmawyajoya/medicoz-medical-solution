import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import "./SingleService.css";

const SingleService = () => {
    const { serviceId} = useParams();
    // console.log(serviceId);
    const [details,setDetails] = useState([]);
    const [singleDetail, setSingleDetail]= useState({});
    useEffect(()=>{
        fetch('/singleDetails.json')
        .then(res=> res.json())
        .then(data => setDetails(data));
    },[])
    // console.log(details);


    useEffect(()=>{
      const foundDetail = details.find(detail=>detail.id ==serviceId )
      setSingleDetail(foundDetail);
    },[details])

    return (
        <div>
            {/* <h2>this is single details {serviceId}</h2>
            <h3>{singleDetail?.name}</h3> */}
            <div className="row">
                <div className="col-lg-12">
                    <img src={singleDetail?.img} alt="" />
                    <h1>{singleDetail?.name}</h1>
                    <p>{singleDetail?.description}</p>
                    <button className="btn btn-warning mb-3">Click here For more details</button>
                </div>
            </div>
        </div>
    );
};

export default SingleService;