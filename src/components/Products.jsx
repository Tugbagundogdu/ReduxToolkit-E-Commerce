import React from 'react'
import { useSelector , useDispatch} from 'react-redux'
import { remove } from '../store/productSlice';

const Products = () => {
  const baskets = useSelector((state)=> state.product);
  const dispatch = useDispatch();
  const handleDelete = (id)=>{
    dispatch(remove(id))
  }
  return (
    <div className='productPage'>
      {
        baskets.length === 0 ? <p className='emptyPage'>No Product Added!</p> :
        baskets.map((basket)=>{
        return <div className='product'>
        
        <img src={basket.image} alt="" />
        <p>{basket.title}</p>
        <p>$ {basket.price}</p>
        <button onClick={()=>handleDelete(basket.id)} className='delete'>Remove</button>
        
    </div>
        })
      }
    </div>
  )
}

export default Products
