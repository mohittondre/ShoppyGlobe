import { useDispatch } from "react-redux";
import {
  removeFromCart,
  increaseQty,
  decreaseQty,
} from "../features/cart/cartSlice";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div className="cart-card">
      <img src={item.thumbnail} alt={item.title} />

      <div className="cart-details">
        <h4>{item.title}</h4>
        <p>${item.price}</p>

        <div className="qty-controls">
          <button onClick={() => dispatch(decreaseQty(item.id))}>-</button>
          <span>{item.quantity}</span>
          <button onClick={() => dispatch(increaseQty(item.id))}>+</button>
        </div>
      </div>

      <button
        className="remove-btn"
        onClick={() => dispatch(removeFromCart(item.id))}
      >
        ✕
      </button>
    </div>
  );
};

export default CartItem;
