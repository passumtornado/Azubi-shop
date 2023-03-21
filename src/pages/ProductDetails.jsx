import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import Button from '../components/Button'
import { CartState } from '../context/ContextProvider'


function ProductDetails() {
 const {state:{products,cart},dispatch}=CartState()
  const {id} = useParams()
  const product = products.find(item =>item.id ===id)
  const cartItem = cart?.some(i=>i.id === `${product.id}`)
  console.log(cart)
  console.log(product.id)

  // Add to cart
  function handleAddCart(){
    dispatch({
      type:'ADD_TO_CART',
      payload:product
    })
  }
  // Remove from cart
  function handleRemoveCart(){
    dispatch({
      type:'REMOVE_FROM_CART',
      payload:`${product.id}`
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
          <span>$ {product.price}</span>
          {
            cart.some(p=>p.id === `${id}`)?(
              <button className='btn btn-danger'
              onClick={handleRemoveCart}
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
