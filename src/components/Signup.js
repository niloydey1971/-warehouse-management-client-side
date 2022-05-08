import React, { useState } from 'react';
import { Card, Col, Container, Form, FormControl, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import carsignup from '../images/carsignin.jpg'

const Signup = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    return (
        <Container>


            <Row className='mx-auto my-5 d-flex justify-content-between align-items-center text-center gap-3'>
                <Col sm='6' className=' text-center'>
                    <div className='login-text my-4'>
                        <img className='img-fluid p-3' src={carsignup} alt='Car moto Signup' />



                    </div>
                </Col>

                <Col sm>
                    <Card className='p-5 mt-5 w-75'>
                        <h2 className='fs-3 text-start'>Register Here.</h2>

                        <form>
                            <Form.Control className='mt-3 border-0 border-bottom' onBlur={(e) => setName(e.target.value)} type="text" name="name" placeholder="Your Name" required>

                            </Form.Control>
                            <Form.Control className='mt-3 border-0 border-bottom' onBlur={(e) => setEmail(e.target.value)} type="email" name="email" placeholder="Your Email" required>

                            </Form.Control>
                            <FormControl className='mt-3 border-0 border-bottom' onBlur={(e) => setPass(e.target.value)} type="password" name="password" placeholder="Your Password" required />

                            

                                <input type="submit" value="Register" className="btn btn-primary w-100 my-3 p-2 " style={{ backgroundColor: "#1D9AD6" }}></input>
                                


                            
                            {/* <p className='mt-2 text-danger fw-6'>{error?.message}</p> */}

                        </form>


                        <p className='mt-2 mx-auto fs-6'>Already registered ? Go to  <Link className='text-success text-decoration-none' to='/login'>Login Page.</Link></p>


                    </Card>
                </Col>
            </Row>

        </Container>
    );
};

export default Signup;