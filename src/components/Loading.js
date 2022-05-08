import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
    return (
        <div className='my-5' style={{width:'300px',height:'300px'}}>
            <Spinner animation='border' variant='primary'></Spinner>
        </div>
    );
};

export default Loading;