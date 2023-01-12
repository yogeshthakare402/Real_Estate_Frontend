import React, { useState } from 'react';
import './SignIn.css';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";


function Signin() {
    const [details, setDetails] = useState({
        userid: "",
        password: "",
    });

    const navigate = useNavigate();
    async function onsubmits(e) {
        e.preventDefault(e);
        const { userid, password } = details;

        let url = "https://real-estate-app-zedu.onrender.com/api/users/login";
        // let urlLocal = "http://localhost:8000/api/users/login"

        axios.post(url, {
            email: userid,
            password: password,
        }).then((res) => {
            console.log(res.data.token)
                localStorage.setItem("token", res.data.token);
                localStorage.setItem("userid", res.data.details.userid);
                localStorage.setItem("name", res.data.details.email);
                navigate("/propertyListingPage",{state:{token:res.data.token,id:res.data.details.userid}});
            }).catch((err) => alert("Enter valid crendentials"));
    }



    return (
        <form onSubmit={(e) => onsubmits(e)} className="container">
            <div className="login">
                <img
                    id="logo"
                    className="login-items"
                    alt="logo"
                    src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/88975523945059.5632b7d5654ae.png"
                />
                <span id="credential-signin" className="login-items">
                    Enter your credentials to access your account
                </span>
                <input
                    type="text"
                    id="userid"
                    value={details.userid}
                    onChange={(e) => setDetails({ ...details, userid: e.target.value })}
                    className="login-items"
                    placeholder="Email ID"
                    required
                />
                <input
                    type="password"
                    value={details.password}
                    onChange={(e) => setDetails({ ...details, password: e.target.value })}
                    className="login-items"
                    placeholder="Password"
                    required
                />
                <button id="signin" className="login-items" onClick={(e) => { onsubmits(e) }}>
                    Sign In
                </button>

                <Link to="/signup" id="link">
                    <span id="signup" className="login-items">
                        Sign Up
                    </span>
                </Link>
            </div>

            <p className="extra-info">
                Don’t have an account?
                <span><Link to="/signup" id="link">Sign Up</Link></span>
            </p>
        </form>
    );

}

export default Signin