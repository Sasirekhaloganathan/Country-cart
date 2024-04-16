import React, { useState } from 'react';
import '../Style/content.css';
import Navigation from './Navigation';
import { Link } from 'react-router-dom';
function Content() {
    const [showDescription, setShowDescription] = useState(false);
  const handleMouseClick=()=>{
    
  }
    const handleMouseEnter = () => {
        setShowDescription(true);
    };

    const handleMouseLeave = () => {
        setShowDescription(false);
    };

    return (
      <>
      <div className='nav'>
        <Navigation />
      </div>
        <div className="product-display">
        
            <div className="product">
                <img
                    src="/icons.png"
                    alt="Product"
                    className="product-image"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    />
                {showDescription && (
                  <div className="description-box">
                        <h2>Product Name</h2>
                        <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et turpis justo.</p>
                        <p>Price: $20</p>
                    </div>
                )}
            </div>
                <Link to='/cart'><div>Content</div></Link>
            
        </div>
                </>
    );
}

export default Content;
