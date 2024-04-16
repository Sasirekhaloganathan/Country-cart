import React from "react";
import '../Style/cart.css';
import Navigation from "./Navigation";
import { useParams } from "react-router-dom";
function Cart({data}){
    
    console.log(data);
    return(

        <>
        <div className="nav">
            <Navigation />
        </div>
        <div >
            <div>{data}
            </div>
        </div>

        </>
    )
}

export default Cart;