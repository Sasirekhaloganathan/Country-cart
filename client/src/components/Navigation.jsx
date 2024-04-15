import React from "react"
import '../Style/Navi.css'
import logo from '/icons.png'
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

export default Navigation;