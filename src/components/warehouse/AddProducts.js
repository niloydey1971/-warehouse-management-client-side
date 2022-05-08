import React, { useState } from 'react';
import { Card, Col, Container, Form, Row } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import cars from '../../images/carmoto.png'
import auth from '../../firebase.init';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

const AddProducts = () => {
    const [user] = useAuthState(auth)
    const email = user.email
    const sold = 0

    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [quantity, setQuantity] = useState(0)
    const [description, setDescription] = useState('')
    const [image, setImage] = useState('')
    const [supplierName, setSupplierName] = useState('')

    // handle  add items btn......
    const handleAddItems = (e) => {
        e.preventDefault()
        const data = { name, price, quantity, description, image, supplierName, sold, email }
        axios.post('https://floating-inlet-40982.herokuapp.com/products/', data).then(res => toast("Product Added Successfully!"))

        e.target.reset()

    }

    return (
        <Container>
            <h1 className='mt-5 fw-bold fs-3 text-center'>Add New Products. </h1>

            <Row className='mx-auto my-5 d-flex justify-content-between align-items-center text-center gap-3'>
                <Col sm='6' className=' text-center'>
                    <div className='login-text my-4'>
                        <img className='img-fluid p-3' src={cars} alt='cars' />



                    </div>
                </Col>

                <Col sm>
                    <Card className='p-5 mt-5 w-75'>
                        <h2 className='lead'>Add New Product.</h2>

                        <form onSubmit={handleAddItems}>

                            <Form.Control className='mt-3' onBlur={(e) => setName(e.target.value)} type="text" name="name" placeholder="Product" required />

                            <Form.Control className='mt-3' onBlur={(e) => setImage(e.target.value)} type="text" name="image" placeholder="Product Image" required />

                            <Form.Control className='mt-3' onBlur={(e) => setDescription(e.target.value)} type="textarea" name="description" placeholder="Description" required />

                            <Form.Control className='mt-3' onBlur={(e) => setQuantity(e.target.value)} type="number" name="quantity" placeholder="Quantity" required />


                            <Form.Control className='mt-3' onBlur={(e) => setPrice(e.target.value)} type="number" name="price" placeholder="Price" required />


                            <Form.Control className='mt-3' onBlur={(e) => setSupplierName(e.target.value)} type="text" name="supplierName" placeholder="Supplier" required />


                            <input type="submit" value="Add Product" className="btn btn-primary w-100 p-2 mt-3 text-light" style={{ backgroundColor: "#1D9AD6", border: 'none' }}></input>
                        </form>
                        <ToastContainer />


                    </Card>
                </Col>
            </Row>

        </Container>
    );
};

export default AddProducts;