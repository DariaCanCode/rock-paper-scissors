import React from 'react';
import './Options.css';


const Options = (props) => {
    return(
          <div className="Options">
             <h1 onClick={props.click}>{props.choice}</h1>
  
          </div>
    )
}




export default Options; 