import React from 'react'
import './CheckOut.css'
import { Link } from 'react-router-dom';

const CheckOut = ({cartitems}) => {
  const total=Object.values(cartitems).reduce((acc,item)=>acc+item.price*item.count,0);

  return (
    <div className='checkout'>
      <h1>Check Out</h1>
      <div className='checkout-outer'>
        <div className='checkout-inner'>
          <div className='checkout-item'>
            <p>Items</p>
            <p>Description</p>
            <p>Quantity</p>
            <p>Price</p>
          </div>
          {Object.keys(cartitems).length === 0 ?
              (<p>Your cart is empty.</p>) :
           (Object.values(cartitems).map((item)=> 
           <div className='checkout-item'>
             <p>{item.name}</p>
             <p>{item.title}</p>
             <p>{item.count}</p>
             <p>{item.price*item.count}</p>
           </div>
          ))
          }
          
        </div>
      </div>
      <br></br>
      <br></br>
      <div className='cart-total'>
                  {Object.keys(cartitems).length === 0 ?
                   "" :
                   <h2>Total:${total}</h2>
                   }
                   <Link to='/Delivery' ><button>Place Order</button></Link>
              </div>
    </div>
  )
}

export default CheckOut