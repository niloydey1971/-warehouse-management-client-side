import React, { useState } from 'react';
import { Button, Card, Col, Container, Form, ListGroup, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

const UpdateProductCard = ({ item }) => {
    const { _id, image } = item

    const [modifiedData, setModifiedData] = useState([item])
    const navigate = useNavigate()

    const [addquantity, setAddQuantity] = useState(0)



    const handleDeliveredProducts = () => {
        const delivered = parseInt(modifiedData[0].sold) + 1

        const quantity = parseInt(modifiedData[0].quantity) - 1


        const data = { quantity, delivered }

        fetch(`http://localhost:4000/products/${_id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(response => response.json())
            .then(data => {
                toast("Product Delivered Successfully!")

                if (data.modifiedCount > 0) {
                    fetch(`http://localhost:4000/products/${_id}`)
                        .then(res => res.json())
                        .then(data => setModifiedData(data))


                }


            })
            .catch((error) => {
                console.error('Error:', error);
            });

    }



    const handleQuantityForm = (e) => {
        e.preventDefault()
        const quantity = parseInt(addquantity) + parseInt(modifiedData[0].quantity)
        const delivered = parseInt(modifiedData[0].sold)

        const data = { quantity, delivered }




        fetch(`http://localhost:4000/products/${_id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(response => response.json())
            .then(data => {

                toast("Product Added Successfully!")
                e.target.reset()
                if (data.modifiedCount > 0) {
                    fetch(`http://localhost:4000/products/${_id}`)
                        .then(res => res.json())
                        .then(data => {
                            setModifiedData(data)

                        })



                }


            })
            .catch((error) => {
                console.error('Error:', error);
            });

    }

    return (

        <Container>



            <Row className='mx-auto my-5 d-flex justify-content-between align-items-center text-center gap-3'>
                <Col sm='6' className=' text-center'>
                    <div className='login-text '>
                        <img className='img-fluid p-3 rounded border' src={image} alt='product' />

                    </div>
                    <div className='d-flex mt-4 justify-content-center '>
                        <Button onClick={() => navigate('/inventories')} className="btn  btn-primary text-light px-5 py-3 rounded" style={{ border: 'none', width: '40%' }}>Manage All Product</Button>

                    </div>

                </Col>

                <Col sm>
                    {
                        modifiedData.map(i => <ListGroup as="ul" className='w-75 mx-auto' >
                            <ListGroup.Item as="li" className='fw-6 text-start'>
                                Product: {i.name}
                            </ListGroup.Item>
                            <ListGroup.Item as="li" className='text-start'>
                                Price : ${i.price}
                            </ListGroup.Item>
                            <ListGroup.Item as="li" className='text-start'>Description:{i.description}</ListGroup.Item>
                            <ListGroup.Item as="li" className='text-start'>Supplier: {i.supplierName}</ListGroup.Item>
                            <ListGroup.Item as="li" className='text-start'>
                                Quantity: {i.quantity}
                            </ListGroup.Item>

                            <ListGroup.Item as="li" className='text-start '>
                                <p>Sold: {i.sold}</p>
                                <Button onClick={() => handleDeliveredProducts()} className='bg-success border-0'>Delivered</Button>
                            </ListGroup.Item>


                        </ListGroup>)
                    }










                    <div className='w-50 ms-auto mt-3'>
                        <form onSubmit={handleQuantityForm} className='d-flex justify-content-center align-items-center'>
                            <Form.Control className='mt-3' onBlur={(e) => setAddQuantity(e.target.value)} type="number" name="quantity" placeholder="Add Product" required>

                            </Form.Control>

                            <input type="submit" value="Add" className="btn btn-primary  p-2 mx-2 mt-3" style={{ backgroundColor: "#1D9AD6", border: "none" }}></input>


                        </form>
                    </div>
                    <ToastContainer />






                </Col>
            </Row >



        </Container >
    );
};

export default UpdateProductCard;