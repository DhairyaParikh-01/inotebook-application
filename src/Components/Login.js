import { useState } from "react";
import React from 'react'
import { useHistory } from "react-router-dom";

const Login = (props) => {
    const [credentials, setCredentials] = useState({email: "", password: ""});
    let history = useHistory();

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        const  response = await fetch('http://localhost:5000/api/auth/login',{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "email": credentials.email,
                "password": credentials.password
            })
        });
        const json = await response.json();
        console.log(json);
        if(json.success){
            // Save he JWTtoken and redirect to home component
            localStorage.setItem('token', json.jwtToken);
            props.showAlert("Logged in successfully", "success");
            history.push('/');
        }
        else{
            // alert("Invalid credentials");
            props.showAlert("Invalid Credetails", "danger");
        }
        setCredentials({email: "", password: ""});
    }
    const onChange = (e) => {
        setCredentials({...credentials, [e.target.name]: e.target.value});
    }
    return (
        <div>
            <form onSubmit={handleOnSubmit}>
                <h2 style={{textAlign: "center", margin: "2% 0 0 0"}}>Login</h2>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" value={credentials.email} onChange={onChange} name="email" aria-describedby="emailHelp"/>
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" value={credentials.password} onChange={onChange} name="password" id="exampleInputPassword1"/>
             </div>
                <button type="submit" onClick={handleOnSubmit} className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Login
