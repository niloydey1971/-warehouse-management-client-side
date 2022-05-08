import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Container, Table } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import AllProductsListTable from './AllProductsListTable';



const UserAccount = () => {
    const [user] = useAuthState(auth)
    const [product, setProduct] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
        const getMyItems = async () => {
            const email = user.email

            const url = `http://localhost:4000/myproduct?email=${email}`;
            const { data } = await axios.get(url)

            setProduct(data)


        }
        getMyItems()
    }, [user])



    return (

        <Container>
            <div className='my-5'>

                <div className='d-flex align-items-center justify-content-center gap-3'>

                    <h2 className='text-center my-5 fw-5'>My Addeded Products </h2>
                    <div className='my-5 mx-auto d-flex justify-content-center'>
                        <Button onClick={() => navigate('/addproduct')} className="btn text-light px-3 border-0" style={{ backgroundColor: "#1D9AD6" }}>Add More Products</Button>

                    </div>




                </div>



                <div class="table-responsive">
                    <Table striped bordered hover class="table">
                        <thead>
                            <tr>

                                <th>Product Name</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Supplier</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>


                            {
                                product.map(item => <AllProductsListTable key={item._id} singleItem={item}></AllProductsListTable>
                                )
                            }



                        </tbody>
                    </Table>

                </div>







            </div>


        </Container>

    );
};

export default UserAccount;