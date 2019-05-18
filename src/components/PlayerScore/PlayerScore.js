import React from 'react';
import './PlayerScore.css';

const PlayerScore = (props) => {
    return(
          <div className="PlayerScore">
             <h1 onClick={props.click}> PlayerScore {props.choice}</h1>

          </div>
    )
}

export default PlayerScore; 