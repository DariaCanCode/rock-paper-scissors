import React from 'react'; 
import './Message.css';


const Message = (props) => {
    return(
        <div>
            <h1> {props.message} </h1>
        </div>
    )
}

export default Message; 