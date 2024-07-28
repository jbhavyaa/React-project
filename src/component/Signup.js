import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../common/Common.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Signup = () => {
    const navigate = useNavigate();

    const handleLoginNavigation = () => {
        navigate('/login');
    };  

    const notify = () => toast("Form Submitted");    

    return (
        <div className="signup">
            <form className="SignupForm">
                <h1>SIGNUP FORM</h1>
                <label>First Name</label>
                <input type="text"required />
                <label>Last Name</label>
                <input type="text" required  />
                <label>Email</label>
                <input type="email" required />
                <label>Password</label>
                <input type="password" required  />
                <button type="submit" onClick={notify}>Submit</button>
                <ToastContainer />
            </form>
            <div className="toggle" id='right-panel'>
                <h4>Already Have an Account ?</h4>
                <button type="button" onClick={handleLoginNavigation}>Go to Login</button>
            </div>
        </div>
    );
}


