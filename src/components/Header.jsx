import React from 'react'
import {BsFillBasketFill} from 'react-icons/bs'
import { Link, NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Header = () => {
  const baskets = useSelector((state) => state.product);
  return (
    <div className='header'>
      <Link to={'/'} className='logo'>Andromeda Store</Link>
      <div className='links'>
        <NavLink to={'/'}>Home</NavLink>
        <NavLink to={'products'}>Products</NavLink>      
      </div>

   <div className='span'>
       <span>Basket :</span>
       <span className='icon'>{baskets.length}</span>
       <BsFillBasketFill/>
      
   </div>
           
       
    </div>
  )
}

export default Header
