import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { edit , add } from '../store/productSlice';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import 'react-toastify/dist/ReactToastify.css';const Product = ({ product }) => {
  const { id, image, title: initialTitle, price: initialPrice , description: initialDescription } = product;
  const dispatch = useDispatch();
  const [title, setTitle] = useState(initialTitle);
  const [price, setPrice] = useState(initialPrice);
  const [description, setDescription] = useState(initialDescription);
  const [isModalOpen, setIsModalOpen] = useState(false);


  const productAddedNotify = () => toast("Product Added!");
  const productUpdatedNotify = () => toast("Product Updated!");

  const handleEdit = () => {
    setIsModalOpen(true);
  };

  const handleSave = () => {
    dispatch(edit(id, title, price, description));
    setIsModalOpen(false);
    productUpdatedNotify();
  };

  const handleClick = (product) => {
    dispatch(add(product));
    productAddedNotify();
  };

  return (
    <div className='product'>
      <img src={image} alt='' />
      <p>{title}</p>
      <p>$ {price}</p>
      <button onClick={handleEdit}>Edit</button>
      <button onClick={() => handleClick(product)} className='add'>Add</button> 
      <ToastContainer
        position="top-left"
       />
           {isModalOpen && (
        <div className='modal'>
          <div className='modal-content'>
            <span className="close" onClick={() => setIsModalOpen(false)}>&times;</span>
            <h2>Edit Product</h2>
            <label>Title:</label>
            <input
              type='text'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <label>Price:</label>
            <input
              type='number'
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
            <textarea name="" id="" cols="30" rows="10" value={description} onChange={(e) => setDescription(e.target.value)} ></textarea>

            <button onClick={handleSave}>Save</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Product;
