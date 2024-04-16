import React, { useState } from 'react';
import '../Style/content.css';
import Navigation from './Navigation';
import { Link } from 'react-router-dom';
import Cart from './cart';
function addToCart() {
     Cart.querySelector(".Name").innerHTML=document.getElementById("prod").textContent;
     Cart.querySelector(".description").innerHTML=document.getElementById("des").textContent;
     Cart.querySelector(".price").innerHTML=document.getElementById("price").textContent;
     Cart.querySelector(".product-image").setAttribute("src",document.getElementById("prodimg").getAttribute("src"));
};

import Data from'./data';
const Content=()=> {
    return (
      <>
      <div className='nav'>
        <Navigation />
      </div>
        <div className="product-display">
        {Data.map(({id,name,image}) => {
          return (

            <div key={id} className="product">
                <img
                    src={image}
                    alt="Product"
                    className="product-image" id="prodimg"
                    />
                  <div className="description-box">
                        <h2 id="prod">Product Name</h2>
                        <p id="des">Description: Sample product.</p>
                        <p id="price">Price: $20</p>
                        <button onClick={addToCart}>Add to Cart</button>
                    </div>       
            </div>
          );
        
        })}        
            
        </div>
                </>
    );
}

export default Content;
