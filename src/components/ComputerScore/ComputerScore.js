import React from 'react';
import './ComputerScore.css';

const ComputerScore = (props) => {
    return(
          <div onClick = {props.click} className = "ComputerScore">
             <p  > ComputerScore {props.choice} </p>
          </div>
    )
}

export default ComputerScore; 