import React, { useState } from 'react';
import { Card, Col, Container, Form, FormControl, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import carlogin from '../images/carlogin.jpg'
import AutoSignIn from './AutoSignIn';

const Login = () => {
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    return (
        <Container>
          

            <Row className='mx-auto my-5 d-flex justify-content-between align-items-center text-center gap-3'>
                <Col sm='6' className=' text-center'>
                    <div className='login-text my-4'>
                        <img className='img-fluid p-3' src={carlogin} alt='Car moto Login' />



                    </div>
                </Col>

                <Col sm>
                    <Card className='p-5 mt-5 w-75'>
                        <h2 className='fs-3 text-start'>Car Moto Login.</h2>

                        <form>
                            <Form.Control className='mt-3 border-0 border-bottom' onBlur={(e) => setEmail(e.target.value)} type="email" name="email" placeholder="Your Email" required>

                            </Form.Control>
                            <FormControl className='mt-3 border-0 border-bottom' onBlur={(e) => setPass(e.target.value)} type="password" name="password" placeholder="Your Password" required />

                            <div className='mt-3 d-flex flex-wrap-reverse align-items-center justify-content-between'>

                                <input type="submit" value="Sign In" className="btn btn-primary w-50 p-2 " style={{ backgroundColor: "#1D9AD6" }}></input>
                                <p className='text-primary pt-3 pe-auto'>Reset Password?</p>
                               

                            </div>
                            {/* <p className='mt-2 text-danger fw-6'>{error?.message}</p> */}

                        </form>
                        <AutoSignIn></AutoSignIn>

                        
                        <p className='mt-2 mx-auto fs-6'>New Here? Go to  <Link className='text-success text-decoration-none' to='/signup'>Sign Up Page.</Link></p>
                        

                    </Card>
                </Col>
            </Row>

        </Container>
    );
};

export default Login;