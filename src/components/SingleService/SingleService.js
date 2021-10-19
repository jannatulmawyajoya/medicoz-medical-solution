import React from 'react';
import { useParams } from 'react-router';

const SingleService = () => {
    const { serviceId} = useParams();
    return (
        <div>
            <h2>this is single details {serviceId}</h2>
        </div>
    );
};

export default SingleService;