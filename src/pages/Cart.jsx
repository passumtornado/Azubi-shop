import React from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa'
import Button from '../components/Button'

  const ButtonCart =({faIcon})=>{
  return (
    <button className='btn-cart' style={{border:'none',background:'#ffff',padding:'5px',cursor:'pointer'}}>
       {faIcon}
    </button>
  )
}
function Cart() {
  return (
    <div className='cart-table'>
      <h1>Cart</h1>
      <table>
      <tr>
        <th>Product</th>
        <th>Price</th>
        <th>Quantity</th>
        <th>Total</th>
        <th></th>
      </tr>
      <tr>
        <td>Men Shirt</td>
        <td>$28.00</td>
        <td className='add-btn'>
          <ButtonCart faIcon={<FaMinus className='fa'/>}/><ButtonCart faIcon={3}/><ButtonCart faIcon={<FaPlus className='fa'/>}/>
        </td>
        <td>$58.00</td>
        <td> <button className='btn btn-danger'>Delete</button></td>
      </tr>
    </table>
      <div className='cart-total'>
       <span><small>Total Amnt:</small>$58.00</span>
       <Button name='Checkout' />
      </div>  
    </div>
  )
}

export default Cart
