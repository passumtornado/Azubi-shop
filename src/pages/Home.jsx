import React,{useState} from 'react'
import CardList from '../components/CardList'
import SearchBar from '../components/SearchBar'
import { CartState } from '../context/ContextProvider'

function Home() {
  const {state} = CartState()
   console.log(state)
  return (
    <div className='container'>
     <SearchBar products={state.products}/>
     <CardList products={state.products}/>
    </div>
  )
}

export default Home
