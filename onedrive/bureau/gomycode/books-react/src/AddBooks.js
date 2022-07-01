import './App.css';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';

const AddBooks=()=>{
  const [uploadBy,setUploadBy]=useState("");
  const [title,setTitle]=useState("");
  const [descreption,setDescreption]=useState("");
  const [pages,setPages]=useState("");
  const [author,setAuthor]=useState("");
  
  const onsubmit=()=>{
    axios.post("http://localhost:3001/api/addbooks",{uploadBy:uploadBy ,title:title,descreption:descreption,pages:pages,author:author}).then(()=>{
      alert("book added")
    })
  }

    return(
<>
            <div className="topnav">
                <a href="/Logout">logout</a>
                <a  className="active" href="/AddBooks">ADD</a>
                <a  className="active" href="/Books">Books</a>
                <input type="text" placeholder="Search.."/>
              </div>  
    <div>
        <div className="NameUsers">
         <div >
        <p>
         Name is:<input type="text" size="30" name="uploaded_by" id="uploaded-by" onChange={(e)=>{setUploadBy(e.target.value)}}/>
        </p>
        </div>   
        </div>
        <div>
            <p >Name of book:<input type="text"  size="24" name="title" id="title" onChange={(e)=>{setTitle(e.target.value)}}/></p> 
            <p > summary:<input type="text"  size="29" name="descreption" id="descreption" onChange={(e)=>{setDescreption(e.target.value)}}/></p>
            <p >number of page is: <input type="text" name="page" id="page" onChange={(e)=>{setPages(e.target.value)}}/></p>
            <p >author name: <input type="text" size="25" name="author" id="author" onChange={(e)=>{setAuthor(e.target.value)}}/></p>
        </div>
        <button type="submit" id="AddBook" onClick={onsubmit}>ADD</button>
    </div>
          

    


    
    

</>
)}
export default AddBooks;