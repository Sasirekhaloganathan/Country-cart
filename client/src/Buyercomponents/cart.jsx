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
            <div className="prod">
                  <div className="description-box">

                        <h2 id="prodname">Product Name</h2>
                        <p id="proddesc">Description: Sample product.</p>
                        <p id="prodprice">Price: $20</p>
                    </div>  
                </div>

        </>
    )
}

export default Cart;