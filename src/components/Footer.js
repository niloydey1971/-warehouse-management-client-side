import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
    return (
        <div className='text-light mt-5 py-5' style={{ backgroundColor: '#1D9AD6' }}>
            <Container>
                <div className='d-flex align-items-center justify-content-between gap-3 flex-wrap'>
                    <p className='fs-3 text-light'>Car Moto Inc.</p>
                    <p className='fs-5 text-light'>&copy; All Rights Reserved-carsmoto22</p>


                </div>

            </Container>

        </div>
    );
};

export default Footer;