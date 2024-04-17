import React, { useState } from 'react';
import '../Style/content.css';
import Navigation from './Navigation';
import { Link } from 'react-router-dom';
import Cart from './cart';
function addToCart() {

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

            <div className="product">
                <img
                    src={image}
                    alt="Product"
                    className="product-image"
                     id="img"

                    />
                  <div className="description-box">

                        <h2 id="name">Product Name</h2>
                        <p id="desc">Description: Sample product.</p>
                        <p id="price">Price: $20</p>
                        <button onClick={addToCart}>Add To Cart</button>
                    </div>  
                </div>
    
          );
        
        })}        
            
        </div>
                </>
    );
}

export default Content;
