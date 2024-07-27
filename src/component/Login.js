import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../common/Common.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Login = () => {
    const navigate = useNavigate();

    const handleSignupNavigation = () => {
        navigate('/signup');
    };

    const notify = () => toast("Form Submitted");   

    return (
        <div className="Login">
            <div className="toggle" id='left-panel'>
                <h4>Create a New Account</h4>
                <button type="button" onClick={handleSignupNavigation}>Go to Signup</button>
            </div>
            <form className="LoginForm">
                <h1>LOGIN FORM</h1>
                <label>Email</label>
                <input type="email" />
                <br />
                <label>Password</label>
                <input type="password" />
                <br />
                <button type="submit" onClick={notify}>Submit</button>
            </form>    
        </div>
    );
}
