import React from 'react';
import { Link } from "react-router-dom";
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import auth from '../firebase.init';
import { Container, Nav, Navbar } from 'react-bootstrap';



const CarsMenu = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth);

    }
    return (
        <Navbar collapseOnSelect expand="lg" variant="dark" style={{ backgroundColor: "#1D9AD6" }}>
            <Container>
                <Navbar.Brand>Car Moto</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">


                    </Nav>
                    <Nav >
                        <Nav.Link className='text-light'><Link style={{ textDecoration: 'none', color: '#fff' }} to='/'>Home</Link></Nav.Link>
                        <Nav.Link className='text-light'><Link style={{ textDecoration: 'none', color: '#fff' }} to='/blog'>Blog</Link></Nav.Link>

                        {
                            user?.uid ?
                                <>
                                    <Nav.Link><Link style={{ textDecoration: 'none', color: '#fff' }}  to='/myproduct'>My Product </Link></Nav.Link>
                                    <Nav.Link style={{ textDecoration: 'none', color: '#fff' }}  onClick={handleSignOut}>Sign Out</Nav.Link>
                                    <Nav.Link className='text-light text-decoration-underline'>{user.displayName}</Nav.Link>

                                </>
                                :
                                <>
                                    <Nav.Link className='text-light'><Link style={{ textDecoration: 'none', color: '#fff' }} to='/login'>Sign In</Link></Nav.Link>
                                    <Nav.Link className='text-light'><Link style={{ textDecoration: 'none', color: '#fff' }} to='/signup'>Register</Link></Nav.Link>
                                </>



                        }





                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>


    );
};

export default CarsMenu;