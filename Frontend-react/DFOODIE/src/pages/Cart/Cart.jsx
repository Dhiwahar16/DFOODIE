//used to add images and items in cart 

import React from 'react'
import './Cart.css'
import { useDispatch } from 'react-redux'
import { addToCart,removeFromCart,removeitem } from '../../features/Cart/CartSlice'
import { Link } from 'react-router-dom'

const Cart = ({cartitems}) => {
    const dispatch=useDispatch();
    const total=Object.values(cartitems).reduce((acc,item)=>acc+item.price*item.count,0);

    return (
      <div className='cart'>
          <h1>Cart</h1>
          {Object.keys(cartitems).length === 0 ?
          (<p>Your cart is empty.</p>) :
          (Object.values(cartitems).map((item)=> (
          <div key={item.id} className="cart-items">
            <div className='cart-img-items'>
              <img src={item.img} alt={item.name} style={{width:75, height:75}} />
            <div className='item-details'>
              <p>{item.name}</p>
              <p>{item.title}</p>
              <p>per item ${item.price}</p>
            </div>
            </div>
            <div className='item-quantity'>
                <div className='item-quantity-btn '>
                  <div className='item-quantity-btn-img'>
                  <img src='/assets/minus-add.svg' onClick={() => dispatch(removeFromCart(item.id))} />
                  <span>{item.count}</span>
                  <img src='/assets/plus-add.svg' onClick={() => dispatch(addToCart(item))} />
                  </div>
                  <p>Cost:{item.count * item.price}</p>
                </div>
                <div className='item-remove'>
                  <img src="/assets/rubbish-bin.png" alt="Remove" onClick={()=> dispatch(removeitem(item.id))}/>
                </div>
                </div>
          </div>
          )
          ))
          }
          <br></br>
          <br></br>
            {Object.keys(cartitems).length === 0 ?
             "" :
             <div className='cart-total' >
             <h2>Total:${total}</h2>
             <Link to='/CheckOut' ><button>Check Out</button></Link></div>
             }
    </div>
  )
}

export default Cart