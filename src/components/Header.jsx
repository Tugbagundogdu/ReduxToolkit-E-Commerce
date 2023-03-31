import React from 'react'
import {BsFillBasketFill} from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Header = () => {
  const baskets = useSelector((state) => state.product);
  return (
    <div className='header'>
      <p className='logo'>Andromeda Store</p>
      <div className='links'>
        <Link to={'/'}>Home</Link>
        <Link to={'products'}>Products</Link>      
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
