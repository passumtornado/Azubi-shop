import React,{useState} from 'react'
import data from '../data'
import Card from './Card'

function CardList({products}) {
    const cardList = products.map((item,index)=>(
        <Card item={item} key={item.id}/>
    ))
  return (
    <div className='card-container'>
      {cardList}
    </div>
  )
}

export default CardList
