import React from 'react';
import './categoryItem.style.scss';


export const CategoryItem = ({category}) => {
    const {imageUrl, title} = category;
  return (
   
        <div className="category-container">
          <div className="background-image" style={{backgroundImage: `url(${imageUrl})`}}/>
          <div className="category-body-container">
            <h2 style={{textTransform: `uppercase`}}>{title}</h2>
            <p style={{textTransform: `uppercase`}}>Shop Now</p>
          </div>
        </div>
        
  )
}
