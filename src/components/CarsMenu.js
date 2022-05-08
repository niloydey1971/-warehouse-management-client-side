import React from 'react';
import { Link } from "react-router-dom";
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import auth from '../firebase.init';
import { Container, Nav, Navbar } from 'react-bootstrap';



const CarsMenu = () => {
    // const [user] = useAuthState(auth);
    // const handleSignOut = () => {
    //     signOut(auth);

    //}
    return (
        <Navbar collapseOnSelect expand="lg"variant="dark" style={{backgroundColor:"#1D9AD6"}}>
            <Container>
                <Navbar.Brand href="#home">Car Moto</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        
                       
                    </Nav>
                    <Nav>
                    <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                        <Nav.Link href="#deets">More deets</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            Dank memes
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>


    );
};

export default CarsMenu;