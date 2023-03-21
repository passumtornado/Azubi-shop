import React from 'react'
import CartItems from '../components/CartItems'
import { CartState } from '../context/ContextProvider'
import Button from '../components/Button'


function Cart() {
  const {state:{cart},dispatch} = CartState()

  let totalItems = cart?.map(c=>parseFloat(c.price))?.reduce((a,c)=>a+c)
  console.log(totalItems)
  return (
    <div className='cart-table'>
      <h1>Cart</h1>
      <table>
       <thead>
      <tr>
        <th>Product</th>
        <th>Price</th>
        <th>Quantity</th>
        <th>Total</th>
        <th></th>
      </tr>
      </thead> 
      <tbody>
      
        {
          cart?.map(item=>(
            <CartItems item={item} key={item.id} dispatch={dispatch}/>
          ))
        }
      </tbody>
    </table>
      <div className='cart-total'>
       <span><small>Total Amnt:</small>${totalItems}</span>
       <Button name='Checkout' />
      </div>  
    </div>
  )
}

export default Cart
