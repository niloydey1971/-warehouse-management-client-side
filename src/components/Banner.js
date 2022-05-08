import React from 'react';
import { Link } from 'react-router-dom';
import car from '../images/carmoto.png'

const Banner = () => {
    return (

        <div className='container'>
            <div className='d-md-flex align-items-center justify-content-center my-5'>
                <div>
                    <h1 className='fw-bold' style={{ color: '#1D9AD6' }}>Car Moto Warehouse</h1> <hr className='fw-bold' style={{ color: '#1D9AD6' , width:'70%' }} />
                    <p>The supply of fuel-efficient models, like hybrids, small crossovers and small-to-midsize cars, was the lowest of all segments in March as gas prices soared, according to a Cox Automotive analysis of vAuto Available Inventory data. </p>
                    <Link className='btn px-4 py-2 text-light' to='/about' style={{ backgroundColor: '#1D9AD6' }}>Know More</Link>

                </div>

                
                    <img className='img-fluid' src={car} alt='car'></img>
                
            </div>


        </div>



    );
};

export default Banner;