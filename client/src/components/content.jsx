import React,{useState} from "react";
import logo from '/icons.png';
import './content.css';
function Navigation(){
    return (
        <nav>   
        <ul>
            <li>
                <a href="/About">
                <img src={logo} alt="Logo"></img>
            </a>
            </li>

            <li>
              <a href="/Home">Home</a>
            </li>
            <li>
              <a href="/Contents">Contents</a>
            </li>
            <li>
              <a href="/Contact">Contact us</a>
            </li>
            <li className="right">
              <a href="/About">About</a>
            </li>
        
            </ul>
         </nav>
    )
}
function Content()
{
    
    return(
        <>
        <div className="nav">
           <Navigation />
        </div>
        <div className="Products">
            <div className="prod1"><img src={logo} alt="samp" /><h2>is your product</h2></div>
            <div className="prod1">2</div>
            <div className="prod1">3</div>
            <div className="prod1">4</div>
            <div className="prod1">6</div>
            <div className="prod1">7</div>
            <div className="prod1">8</div>
            <div className="prod1">9</div>
        </div>
        </>
    )
}

export default Content