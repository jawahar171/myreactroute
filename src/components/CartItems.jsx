import React, { useContext } from "react";
import CartContext from "../context/CartContext";

const CartItem = ({ item }) => {
  const { dispatch } = useContext(CartContext);

  return (
    <div className="flex justify-between items-center border-b py-4">
      <div>
        <h4 className="font-semibold">{item.title}</h4>
        <p>${item.price} x {item.quantity}</p>
      </div>
      <div>
        <button
          className="bg-red-500 text-white p-1 rounded mx-2"
          onClick={() => dispatch({ type: "REMOVE_FROM_CART", payload: item.id })}
        >
          Remove
        </button>
        <button
          className="bg-green-500 text-white p-1 rounded mx-2"
          onClick={() =>
            dispatch({
              type: "UPDATE_QUANTITY",
              payload: { id: item.id, quantity: item.quantity + 1 },
            })
          }
        >
          +
        </button>
        <button
          className="bg-yellow-500 text-white p-1 rounded mx-2"
          onClick={() =>
            dispatch({
              type: "UPDATE_QUANTITY",
              payload: { id: item.id, quantity: Math.max(item.quantity - 1, 1) },
            })
          }
        >
          -
        </button>
      </div>
    </div>
  );
};

export default CartItem;
