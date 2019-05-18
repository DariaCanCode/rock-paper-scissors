import React from 'react'; 
import './Header.css'; 

const Header =()=> {
    return(
        <div className="Header">
           <p className="title">  Welcome to </p>
            <p>  
                <span className="redColor"> Rock, </span>  
                <span className="yellowColor"> Paper, </span> 
                <span className="greenColor">  Scissors game! </span>  
            </p>
        </div>
    )
}


export default Header; 