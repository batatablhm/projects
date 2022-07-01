import './App.css';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';

const Books=()=>{
const [books,setBooks]=useState([]);
useEffect(() => {
    axios.get("http://localhost:3001/api/books").then((res) => {
     setBooks(res.data);
    });
  }, []);
  const ok=books.map((val,index)=>{
    return(
      
       <div key={index}>
       <p>uploadBy:{val.uploadBy}</p> 
       <p>title:{val.title}</p> 
       <p>descreption:{val.descreption}</p> 
       <p>pages:{val.pages}</p> 
       <p>author:{val.author}</p> 
       </div>

      
    )
  })

return(
    <>
     <div className="topnav">
                <a href="/Logout">logout</a>
                <a  className="active" href="/AddBooks">ADD</a>
                <a  className="active" href="/Books">Books</a>
                <input type="text" placeholder="Search.."/>
              </div>  
              <div>  

    
      
       <div >
       {ok}
       </div>

    
  </div>  
  </>
)
};
export default Books;