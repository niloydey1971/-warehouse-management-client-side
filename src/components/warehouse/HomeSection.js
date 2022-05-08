import React from 'react';
import { Button, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import useInventory from '../../hooks/useInventory';
import HomeSectionCard from './HomeSectionCard';

const HomeSection = () => {
    const [items,] = useInventory()
    const navigate = useNavigate()
    return (
        <div className='my-5 py-5'>
            <div className='container'>
                <div className='my-5'>
                    <h2 className='text-center my-5 fw-5'>Car Moto's Inventory</h2>
               
                    <Row>

                        {
                            items.slice(0, 6).map(item => <HomeSectionCard key={item._id} product={item}></HomeSectionCard>
                            )
                        }



                    </Row>

                </div>
                <div className='d-flex mt-4 justify-content-center '>
                    <Button onClick={() => navigate('/inventories')} className="btn  btn-primary text-light px-5 py-3 border-0">Manage All Products</Button>

                </div>


            </div>
        </div>

    );
};

export default HomeSection;