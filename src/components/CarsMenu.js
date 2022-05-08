import React from 'react';
import { Link } from "react-router-dom";
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import auth from '../firebase.init';
import '../css/menu.css'
import '../components/CarsMenuToggle'

const CarsMenu = () => {
    // const [user] = useAuthState(auth);
    // const handleSignOut = () => {
    //     signOut(auth);

    //}
    return (

        <nav>
        <div class="logo">
            <h4>The Nav</h4>
        </div>
        <ul class="nav-links">
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/blog'>Blog</Link></li>
            <li><Link to='/login'>Login</Link></li>

        </ul>
        <div class="burger">
            <div class="line1"></div>
            <div class="line2"></div>
            <div class="line3"></div>
        </div>
    </nav>
       

    );
};

export default CarsMenu;