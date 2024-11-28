import React from 'react';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart, cart } = useCart();
  const isInCart = cart.some((item) => item.id === product.id);

  return (
    <div className="border p-4 rounded shadow">
      <img src={product.image} alt={product.title} className="w-full h-40 object-contain mb-2" />
      <h2 className="text-lg font-semibold">{product.title}</h2>
      <p className="text-sm text-gray-600">{product.description}</p>
      <p className="text-lg font-bold mt-2">${product.price}</p>
      <button
        className={`mt-4 px-4 py-2 text-white rounded ${
          isInCart ? 'bg-red-500' : 'bg-green-500'
        }`}
        onClick={() => (isInCart ? addToCart(product) : addToCart(product))}
      >
        {isInCart ? 'Remove from Cart' : 'Add to Cart'}
      </button>
    </div>
  );
};

export default ProductCard;
