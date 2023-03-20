import React from 'react'
import logo from '../logo.svg'
import {Link,NavLink,useNavigate,useLocation} from 'react-router-dom'
import Button from './Button'
import { CartState } from '../context/ContextProvider'

function Navbar() {
    const location = useLocation()
     const {state:{cart}} = CartState()
  return (
    <div className='navbar-nav'>
      <div className='navbar-brand'>
        <Link to='/'>
          <img src={logo} alt='Azubi logo'/>
          </Link>
      </div>
       {location.pathname === '/register'?(<div className='nav-reg'>
        <p>Already have account?</p>
        <Link to='/login'>
           <Button name='Sign in'/>
        </Link>
       </div>):location.pathname ==='/login'?(
        <div className='nav-reg'>
        <p>New to AzubiShop?</p>
        <Link to='/register'>
           <Button name='Sign up'/>
        </Link>
       </div>
       ):
       (<>
         <div className='navbar-links'>
        <NavLink to='/'>
            <span>Home</span>
        </NavLink>
        <NavLink to='/cart'>
          <span className='cart-badge'>Cart {cart.length > 0 && <span className='badge'>{cart.length}</span>}</span>
        </NavLink>
      </div>
      <div className='navbar-btn'>
      <Link to='/login'>
           <Button name='Login'/>
        </Link>
      </div>
       </>)
       }
        
   
     
    </div>
  )
}

export default Navbar
