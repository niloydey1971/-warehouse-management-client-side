import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const HomeSectionCard = (props) => {
    const navigate = useNavigate()
    const { _id, name, image, description, price, quantity, supplierName } = props.product
    return (
        <Col sm>
            <Card style={{ width: '18rem', margin: 'auto', marginBottom: '20px' }}>
                <div className='w-75 mx-auto mt-3'>
                    <Card.Img variant="top" src={image} alt='product' />
                </div>
                <Card.Body className='text-start my-3'>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>Price: ${price}</Card.Text>

                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Card.Text>Quantity: {quantity}</Card.Text>
                    <Card.Text>Supplier: {supplierName}</Card.Text>
                    <Button onClick={() => navigate(`/inventories/${_id}`)} style={{ backgroundColor: '#1D9AD6', border: 'none' }}>Update Stock</Button>
                </Card.Body>
            </Card>
        </Col>

    );
};

export default HomeSectionCard;