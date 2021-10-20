import React from 'react';
import { Link, useLocation , useHistory} from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const {signInUsingGoogle} = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';
    console.log('came from',location.state?.from);

    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
            history.push(redirect_uri);
        })
    }

    return (
        <div>
            <h2>Please Login</h2>
            <div>
                <form onSubmit="">
                    <input type="email" name="" id="" placeholder="Enter Your Email" />
                    <br />
                    <input type="password" name="" id="" />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
                <p>New to Medicoz Medical Solution? <Link to="/register">Create An Account</Link> </p>
            </div>



            <div>--------------Or-----------------</div>
            {/* <button onClick={signInUsingGoogle} className="btn btn-warning mb-3">Google Sign In</button> */}
            <button onClick={handleGoogleLogin} className="btn btn-warning mb-3">Google Sign In</button>
        </div>
    );
};

export default Login;