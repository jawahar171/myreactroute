import React, { useEffect, useState } from 'react';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/ProductCard';

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductPage;
