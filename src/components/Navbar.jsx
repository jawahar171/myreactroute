import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const { cart } = useCart();

  return (
    <nav className="bg-black text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">
        <Link to="/">Fake Store</Link>
      </h1>
      <Link to="/cart" className="text-lg">
        Cart ({cart.reduce((total, item) => total + item.quantity, 0)})
      </Link>
    </nav>
  );
};

export default Navbar;
