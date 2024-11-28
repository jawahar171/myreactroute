import React from 'react';
import { useCart } from '../context/CartContext';

const CartPage = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discountedPrice = totalPrice * 0.9;

  return (
    <div className="p-4">
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item.id} className="flex justify-between items-center border-b py-2">
              <div>
                <h3>{item.title}</h3>
                <p>${item.price}</p>
              </div>
              <div>
                <input
                  type="number"
                  value={item.quantity}
                  onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                  className="w-12 text-center"
                />
                <button onClick={() => removeFromCart(item.id)} className="text-red-500 ml-4">
                  Remove
                </button>
              </div>
              <p>${(item.price * item.quantity).toFixed(2)}</p>
            </div>
          ))}
          <div className="mt-4">
            <p>Total: ${totalPrice.toFixed(2)}</p>
            <p>Discounted Total: ${discountedPrice.toFixed(2)}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
