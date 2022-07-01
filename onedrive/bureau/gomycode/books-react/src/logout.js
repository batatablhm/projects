
import "./App.css"
import { useNavigate } from "react-router-dom";
function Logout() {
    let navigate=useNavigate
    function logout(){
     
    window.confirm("are you sure to logout");
   
 }
  navigate("/Login");
    return (
      < >
            <div className="topnav">
                <a className="active" href="/AddBooks">ADD</a>
                <a href="/Logout">logout</a>
                <input type="text" placeholder="Search.."/>
              </div>
              <h1>thank you for visit our website</h1>
        <button type="submit" id="logout" onClick={ navigate("/Login")}>logout</button>
              </ >
    );
  }
  
  export default Logout;