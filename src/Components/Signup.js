import {React, useState} from 'react'
import { useHistory } from "react-router-dom";

const Signup = () => {
    let history = useHistory();
    const [credentials, setCredentials] = useState({name: "", email: "", password: "", cpassword: ""});
    const handleOnSubmit =  async (e) => {
        e.preventDefault();
        if(credentials.password === credentials.cpassword){
            const  response = await fetch('http://localhost:5000/api/auth/register',{
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    "name" : credentials.name,
                    "email": credentials.email,
                    "password": credentials.password
                })
            });
            const json = await response.json();
            console.log(json);
            setCredentials({name: "", email: "", password: "", cpassword: ""});
            if(json.success){
                // Save auth token and redirect to the home page as a new user.
                localStorage.setItem('token', json.jwtToken);
                history.push('/');
            }
            else{
                alert("User with this email is already registered!");
            }
        }
        else{
            alert("passwords not matching");
        }
    }
    const onChange = (e) => {
        setCredentials({...credentials, [e.target.name]: e.target.value});
    }
    return (
        <div>
            <form onSubmit={handleOnSubmit}>
                <h2 style={{textAlign: "center", margin: "2% 0 0 0"}}>Sign Up</h2>
                <div className="form-group">
                    <label htmlFor="exampleInputName1">Name</label>
                    <input type="text" className="form-control" id="exampleInputName1" value={credentials.name} required onChange={onChange} name="name" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" value={credentials.email} required onChange={onChange} name="email"/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" name="password" value={credentials.password} required onChange={onChange} id="exampleInputPassword1"/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword2">Confirm Password</label>
                    <input type="password" className="form-control" name="cpassword" value={credentials.cpassword} onChange={onChange} id="exampleInputPassword2"/>
                    <small id="cpassword" className="form-text text-muted">Please enter same passwords in both the fields</small>
                </div>
                <button type="submit" className="btn btn-primary">Register</button>
            </form>
        </div>
    )
}

export default Signup
