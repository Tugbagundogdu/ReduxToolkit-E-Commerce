import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Product from './Product';

const Home = () => {

  const [products , setProducts] = useState([]);

  useEffect(()=>{
    const fetchProducts = async ()=>{
      const res = await fetch('https://fakestoreapi.com/products')
      const data = await res.json();
      setProducts(data);
    }
    fetchProducts();
  },[])

  console.log(products);

  return (
    <div className='home'>
       <p className='title'>Welcome To The Andromeda Store</p>
       <div className='productList'>
       {
        products.length === 0 ? <h1 className='loading'>Loading...</h1> :
         products.map((product, i) => <Product product={product} key={i}/>)
       }
       </div>
    </div>
  )
}

export default Home
