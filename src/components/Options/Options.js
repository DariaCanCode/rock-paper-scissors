import React from 'react';
import './Options.css';



const Options = (props) => {
  
    return(
          <div onClick={props.click} className={props.style}>
         
             <h1 >{props.choice}</h1>
      
          </div>
    )
}




export default Options; 