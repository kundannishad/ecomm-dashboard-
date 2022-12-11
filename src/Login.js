import Header from "./Header"
import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";

function Login() {
    let navigate = useNavigate();
    useEffect(() => {
        if (localStorage.getItem('user_info')) {
            navigate('/add');
        }
    })

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");


   async function login() {
       // item = {email,password}
        let result = await fetch("http://127.0.0.1:8000/api/login",{
            method:"POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "multipart/form-data"
              },
              body: JSON.stringify({
                email:email,
                password:password,
              }),

        });
        let resJson = await result.json();
        console.warn("result", resJson)
        if (resJson.success === true) {
          setEmail("");
          setPassword("");
          setMessage("User Login successfully");
          localStorage.setItem("user_info", JSON.stringify(resJson.data));
        navigate('/add');
        } else {
          setMessage("Invalid Credentials");
        }
        
    }

    return (
        <div>
            <Header />
            <div className="colsm-6 offset-sm-3">
                <h1>Login Page</h1>
                <br/>
                <input type="text"
                    className="form-control"
                    placeholder="Email" onChange={(e) => setEmail(e.target.value)} /><br />

                <input type="text"
                    className="form-control"
                    placeholder="Password" onChange={(e) => setPassword(e.target.value)} /><br />
               

                <button className="btn-btn-primary" onClick={login}>Login</button>
                <div className="message">{message ? <p>{message}</p> : null}</div>
            </div>
        </div>
    )
}

export default Login