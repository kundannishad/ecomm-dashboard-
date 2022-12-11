import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";
import Header from "./Header"

function Register() {
  let navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('user_info')) {
      navigate('/add');
    }
  })
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");


  async function signUp() {
    let itme = { firstName, lastName, mobileNo, email, password, confirPassword }
    console.warn(itme)
    let result = await fetch("http://localhost:8000/api/register", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Accept": "multipart/form-data"
      },
      body: JSON.stringify({
        first_name: firstName,
        last_name: lastName,
        mobile_no: mobileNo,
        email: email,
        password: password,
        confirm_password: confirPassword

      }),
    })
    let resJson = await result.json();
    console.warn("result", resJson)
    if (resJson.success === true) {
      setFirstName("");
      setEmail("");
      setMessage("User created successfully");
      localStorage.setItem("user_info", JSON.stringify(resJson.data));
       navigate('/add');
    } else {
      setMessage("Some error occured");
    }


    
  }

  return (
  <div>
    <Header></Header>
      <div className="col-sm-6 offset-sm-3">
        <h1>User Signup Page</h1>
        <div className="form-group">
          <input
            type="text"
            value={firstName}
            placeholder="First Name"
            className="form-control"
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            value={lastName}
            placeholder="Last Name"
            className="form-control"
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            value={mobileNo}
            placeholder="Mobile No"
            className="form-control"
            onChange={(e) => setMobileNo(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            value={email}
            placeholder="Email"
            className="form-control"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            value={password}
            placeholder="Password"
            className="form-control"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            value={confirPassword}
            placeholder="Confirm Password"
            className="form-control"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <div className="form-group">
          <button onClick={signUp} className="btn btn-primary">Signup Page</button>
        </div>

        <div className="message">{message ? <p>{message}</p> : null}</div>
      </div>
      </div>
  )
}

export default Register