import React from "react"
import '../Style/Navi.css'
import logo from '/Country Cart Logo.png'
import { RiAccountCircleFill } from "react-icons/ri";

function Navigation(){
    return (
        <nav>   
        <ul>
            <li>
                <a href="/home">
                <img src={logo} alt="Logo"></img>
            </a>
            </li>
        <li>

          <a href="/" ><RiAccountCircleFill className="icon" /></a>
        </li>
        
            <li>
                <a href="/cart">
                <img src="/trolley.png">

                </img>
                    </a>
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