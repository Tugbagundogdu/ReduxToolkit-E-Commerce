import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { remove} from '../store/productSlice';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Products = () => {


  const baskets = useSelector((state) => state.product);
  const dispatch = useDispatch();

  const productRemovedNotify = () => toast("Product Removed!");


  const handleDelete = (id) => {
    dispatch(remove(id));
    productRemovedNotify();
  };



  return (
    <div className='productPage'>
      {baskets.length === 0 ? (
        <p className='emptyPage'>No Product Added!</p>
      ) : (
        baskets.map((basket, i) => {
          return (
            <div className='product' key={i}>
              <img src={basket.image} alt='' />
              <p>{basket.title}</p>
              <p>$ {basket.price}</p>
              <button onClick={() => handleDelete(basket.id)} className='delete'>
                Remove
              </button>
            </div>
          );
        })
      )}
      <ToastContainer
      position='top-left'
      />
    </div>
  );
};

export default Products;
