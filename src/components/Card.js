import React from 'react'
import { Link } from 'react-router-dom'
import { CartState } from '../context/ContextProvider'
import Button from './Button'

function Card({item}) {
  return (
    <div className='card'>
       <div className='card-image'>
        <img src={item.imgUrl} alt={item.name}/>
       </div>
        <div className='card-content'>
          <h2>{item.title}</h2>
          <p>{item.body}</p>
        </div>
        <div className='card-footer'>
          <Link to={`/product/${item.id}`}>
          <Button name='place order'/>
          </Link>
          <span>$ {item.price}</span>
        </div>
    </div>
  )
}

export default Card
