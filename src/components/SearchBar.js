import React,{useState,useEffect} from 'react'
import {FaSearch} from 'react-icons/fa'

function SearchBar({products,setProducts}) {
  const [query,setQuery] = useState('')

  // useEffect(()=>{
  //   if(!query) return setProducts(data)
  //   const filteredProduct = products.filter((product =>product.title.toLowerCase().includes(query)))
  //    setProducts(filteredProduct)
  // },[query])
  return (
    <form className='form-search'>
        <div className='form-group'>
            <span><FaSearch className='search-icon'/></span>
            <input type='text' placeholder='search' value={query} onChange={e=>setQuery(e.target.value)}/>
        </div>
    </form>
  )
}

export default SearchBar
