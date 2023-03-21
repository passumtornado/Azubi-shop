import React from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa'


const ButtonCart =({faIcon,onHandleClick})=>{
    return (
      <button className='btn-cart' style={{border:'none',background:'#ffff',padding:'5px',cursor:'pointer'}} onClick={onHandleClick}>
         {faIcon}
      </button>
    )
  }
function CartItems({item,dispatch}) {
   let totalItem = item.qty * item.price
   console.log(item)
// Icrease quantity
 function handleQtyIcreament(){
    dispatch({
        type:'INCREMENT_CART_QTY',
        payload:{
            id:`${item.id}`,
            val:1
        }
    })
    console.log(item)
 }
//  Delete Cart
function handleDelete(){
   dispatch({
    type:'REMOVE_FROM_CART',
    payload:`${item.id}`
   })
}
  return (
    <tr>
     <td style={{display:'flex',justifyContent:'flex-start',alignItems:'center'}}>
        <img src={item.imgUrl} alt={item.title} width='40' height='40'/>
        <span>{item.title}</span>
     </td>
        <td>$ {item.price}</td>
        <td className='add-btn'>
          <ButtonCart faIcon={<FaMinus className='fa'/>}/>
          <ButtonCart faIcon={item.qty}/>
          <ButtonCart faIcon={<FaPlus className='fa'/>} onHandleClick={handleQtyIcreament}/>
        </td>
        <td>$ {totalItem}</td>
        <td> <button onClick={handleDelete} className='btn btn-danger'>Delete</button></td> 
    </tr>
  )
}

export default CartItems
