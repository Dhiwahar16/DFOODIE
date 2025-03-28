//used to get items to display ( by using use context )

import React, { useContext } from 'react'
import './Items.css'
import { Link } from 'react-router-dom';
import ItemsContext from './ItemsContext';
import { useDispatch } from 'react-redux';
import { addToCart,removeFromCart } from '../../features/Cart/CartSlice.js';

const Items = ({category,cartitems}) => {
  
  const dispatch=useDispatch();

  const [items]=useContext(ItemsContext);

  const filteredItems=category==="All"?items:items.filter((item)=>item.category===category);

  return (
    <div className='item' >
      <div className='item-top'>
      <h1>{category}</h1><Link to='/Menu' >
      <button className={filteredItems.length > 0 ? "item-top-btn":"active1"}>Back</button></Link>
      </div>
    <div className='item-page'>
      {filteredItems.length > 0 ? (
        filteredItems.map((item)=>(
          <div key={item.id} className='item-card' title={item.title}>
            <div className='item-card-img'>
            <img src={item.image} alt={item.name} className='item-card-img-img' />
            { !cartitems[item.id] ?
              (<img src='/assets/plus-add.svg' className='item-cart-btn1' onClick={() =>dispatch(addToCart({id:item.id,name:item.name,
                price:item.price,img:item.image,title:item.title}))}  />)
              :
              (<div className='item-cart-btn '>
              <img src='/assets/minus-add.svg' onClick={() =>dispatch(removeFromCart(item.id))}  />
              <span>{cartitems[item.id].count}</span>
              <img src='/assets/plus-add.svg' onClick={() =>dispatch(addToCart(item))}  />
              </div>)
            }
            </div>
            <h3>{item.name}</h3>
            <p>${item.price}</p>
          </div>
        ))
      ) : (<div ><p className='neg-p'>Sorry, no items available right now in this category.</p>
      </div>
      ) }
    </div>
    <hr></hr>
    </div>
  );
}

export default Items