import React from "react";
import { Router } from "react-router-dom";
import{Link} from "react-router-dom";
import "./App.css";
import "./index.css";



function App() {
  return (
    <div className="one">
    
    <input type="text" name="name" placeholder="enter your name"/><br></br>
    <input type="number" placeholder="enter number"/><br></br>
    <Link to = "/main" >
    <button>start</button>
    </Link>
    <Router/>
    
    

    </div>
    
  );
    

 
      
 

  

  
  }     
    

  



export default App;