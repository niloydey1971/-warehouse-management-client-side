import React from 'react';
import { Button, Container, Table } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import useInventory from '../../hooks/useInventory';
import AllProductsListTable from './AllProductsListTable';
import auth from '../../firebase.init';

const AllProductsList = () => {
    const [user] = useAuthState(auth)
    const [items,] = useInventory()
    const navigate = useNavigate()
    return (
        <Container>
            <div className='my-5'>

                

                    <h2 className='text-center my-5 fw-5'>Car Moto's Products</h2>
                    <div className='my-5 mx-auto d-flex justify-content-center'>
                    <Button onClick={() => navigate('/addproduct')} className="btn text-light px-3 border-0" style={{ backgroundColor: "#1D9AD6"}}>Add More Products</Button>

                </div>

                <div class="table-responsive">
                    <Table striped bordered hover class="table">
                        <thead>
                            <tr>

                                <th>Product</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Supplier</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>


                            {
                                items.map(item => <AllProductsListTable key={item._id} product={item}></AllProductsListTable>
                                )
                            }



                        </tbody>
                    </Table>

                </div>








            </div>

        </Container>
    );
};

export default AllProductsList;