import React, { useState } from 'react';
import '../Style/content.css';
import Navigation from './Navigation';
import { Link } from 'react-router-dom';
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
    
                    />
                
                  <div className="description-box">
                        <h2>Product Name</h2>
                        <p>Description: Sample product.</p>
                        <p>Price: $20</p>
                    </div>
                
            </div>
          );
        })}
                
            
        </div>
                </>
    );
}

export default Content;
