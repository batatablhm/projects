import "./App.css"
import { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
function Login() {
  const [username,setUsername]=useState("");
  const [password,setPassword]=useState("");
  axios.defaults.withCredentials = true;
  let navigate=useNavigate();
  
  const login=()=>{
    axios.post("http://localhost:3001/api/login", {
      username: username,
      password: password,
    }).then((response) => {
      if (response.data.message) {
        console.log(response.data.message);
        alert("enter a valid login");
      } else {
        navigate("/AddBooks");
        console.log(response.data[0].username);      }
    });
  }

    return (
      < >
            <div className="topnav">
                <a className="active" href="/">Register</a>
                <a href="/Login">login</a>
                <input type="text" placeholder="Search.."/>
              </div>
        
    
    
        <p> User Name:<input type="text"  size="29" name="UserName" id="UserName" onChange={(e)=>setUsername(e.target.value)}/></p>
        <p > password:<input type="text"  size="31" name="PassWord" id="Password" onChange={(e)=>setPassword(e.target.value)}/></p>
        <button type="submit" id="login" onClick={login}>login</button>
      </>
    );
  }
  
  export default Login;
  