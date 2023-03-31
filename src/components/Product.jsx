import React from 'react'
import { useDispatch } from 'react-redux';
import { add } from '../store/productSlice';


const Product = ({product}) => {
    const {id ,image , title , price} = product;
    const dispatch = useDispatch();


    const handleClick = (product)=>{
        dispatch(add(product));
    }
  return (
    <div className='product'>
        <img src={image} alt="" />
        <p>{title}</p>
        <p>$ {price}</p>
        <button onClick={() => handleClick(product)}>Add to basket</button>
    </div>
  )
}

export default Product
