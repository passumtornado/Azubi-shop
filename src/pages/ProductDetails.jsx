import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import Button from '../components/Button'
import { CartState } from '../context/ContextProvider'


function ProductDetails() {
 const {state:{products,cart},dispatch}=CartState()
  const {id} = useParams()
  const product = products.find(item =>item.id ===id)
  console.log(cart)
  function handleAddCart(){
    dispatch({
      type:'ADD_TO_CART',
      payload:product
    })
  }
  
  return (
    <div className='product-container'>
      <div className='product-image'>
       <img src={product.imgUrl} alt='cap'/>
      </div>
      <div className='product-content'>
        <h1>{product.title}</h1>
         <p>{product.body}</p>
          <span>{product.price}</span>
          {
            cart.find(p=>p.id === product.id)?(
              <button className='btn btn-danger'
              onClick={()=>{
                dispatch({
                  type:'REMOVE_FROM_CART',
                  payload:product.id
                })
              }}
              >Remove from cart</button>
            ):(
              <button className='btn'
              onClick={handleAddCart}
              >Add to cart</button>
            )
          }
      </div>
    </div>
  )
}

export default ProductDetails
