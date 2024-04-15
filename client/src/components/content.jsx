import React,{useState} from "react";
import logo from '/icons.png';
import '../Style/content.css';
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
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/contactus">Contact Us</a>
            </li>
            <li>
              <a href="/Content">Content</a>
            </li>
            <li className="right">
              <a href="/home">Home</a>
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