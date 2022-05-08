import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import google from '../images/google.png'

const AutoSignIn = () => {

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    // Redirect to inventory page
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/';
    if (user) {
        navigate(from, { replace: true }) }
        return (
            <div>
                <p className='mt-3 mx-auto lead '>Available For You</p>
                <div onClick={() => signInWithGoogle()} className="p-2 d-flex align-items-center justify-content-center autosignin mx-auto gap-2 w-75 ">
                    <img src={google} alt='google'></img>
                    <p className='mt-3 fw-bold'>Sign In with Google</p>

                </div>
            </div>
        );
    };

    export default AutoSignIn;