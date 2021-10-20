import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Register = () => {
    const { signInUsingGoogle } = useAuth();
    return (
        <div>
            <div>
                <h2>Create Account</h2>
                <form onSubmit="">
                    <input type="email" name="" id="" placeholder="Enter Your Email" />
                    <br />
                    <input type="password" name="" id="" placeholder="Password" />
                    <br />
                    <input type="password" name="" id="" placeholder="Re-enter Your Password" />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
                <p>Already Have an Account?<Link to="/login">Login</Link></p>
            </div>
            <div>--------------Or-----------------</div>
            <button onClick={signInUsingGoogle} className="btn btn-warning mb-3">Google Sign In</button>
        </div>
    );
};

export default Register;