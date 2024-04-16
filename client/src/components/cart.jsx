import React from "react";
import '../Style/cart.css';
import Navigation from "./Navigation";
import { useParams } from "react-router-dom";
function Cart(){
    const {data}=useParams();
    return(

        <>
        <div className="nav">
            <Navigation />
        </div>
        <div >
            {data}
        </div>

        </>
    )
}

export default Cart;