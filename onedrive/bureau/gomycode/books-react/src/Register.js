import { useState } from "react";
import "./App.css"
import axios from 'axios'
function Register() {
  const [usernameReg,setUsernameReg]=useState("");
  const [passwordReg,setPasswordReg]=useState("");
  const register = () => {
    axios.post("http://localhost:3001/api/register", {
      username: usernameReg,
      password: passwordReg,
    }).then((response) => {
      console.log(response);
    });
  };
    return (
      < >
            <div className="topnav">
                <a className="active" href="/">Register</a>
                <a href="/Login">login</a>
                <input type="text" placeholder="Search.."/>
              </div>
        <p> User Name:<input type="text"  size="29" name="UserName" id="UserName" onChange={(e)=>setUsernameReg(e.target.value)}/></p>
        <p > password:<input type="text"  size="31" name="PassWord" id="Password" onChange={(e)=>setPasswordReg(e.target.value)}/></p>
        <button type="submit" id="register" onClick={register}>Register</button>
      </>
    );
  }
  
  export default Register;
  