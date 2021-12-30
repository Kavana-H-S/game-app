import React from "react";
import Grid from "react-dom";

import './App.css';
import './index.css';
 
function main() {
    return(
        <div>
            <div>
        <div className="board">
            
         
                <div className="card-outer">
                  <div className="card"/>
                  <Grid container spacing={3}/>
                <Grid item xs={9} sm={4.5} md={3}>
                  <card/>
                </Grid>

                <button>retry</button>
                <button>exit</button>


                
                  <div className="front"></div>
                   <div className="back"></div> 
                    </div> 
                    </div>

);
                    
                ))
                </div>
        
        </div>
    );
}

export default main;