import { useDispatch } from 'react-redux';
import { edit } from '../store/productSlice';
import { useState } from 'react';


const ProductDetailModal = ({ isOpen, handleClose, product, handleSaveEdit }) => {
  const dispatch = useDispatch();
  const [updatedProduct, setUpdatedProduct] = useState({ ...product });

  if (!isOpen) return null;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedProduct({ ...updatedProduct, [name]: value });
  };

  const handleSaveChanges = () => {
    dispatch(edit({ id: product.id, updatedProduct }));
    handleSaveEdit(); // Düzenleme işlemini kaydetmek için
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={handleClose}>&times;</span>
        <form action="" className="form" onSubmit={handleSaveChanges}>
          <input type="text" value={updatedProduct.title || ''} name="title" onChange={handleInputChange} />
          <input type="text" value={updatedProduct.price || ''} name="price" onChange={handleInputChange} />
          <textarea name="description" cols="30" rows="10" value={updatedProduct.description || ''} onChange={handleInputChange}></textarea>
          <button type="submit">Save Changes</button>
        </form>
      </div>
    </div>
  );
};

export default ProductDetailModal;
