import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";

const Cart = () => {
  const cart = useSelector(state => state.cart);

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (cart.length === 0) {
    return <h2 style={{ textAlign: "center", marginTop: "2rem" }}>
      Your cart is empty
    </h2>;
  }

  return (
    <div className="cart-page">
      {/* LEFT */}
      <div className="cart-items">
        {cart.map(item => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>

      {/* RIGHT */}
      <div className="cart-summary">
        <h3>Order Summary</h3>

        <div className="summary-row">
          <span>Items</span>
          <span>{cart.length}</span>
        </div>

        <div className="summary-row">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>

        <Link to="/checkout" className="btn checkout-btn">
          Proceed to Checkout
        </Link>
      </div>
    </div>
  );
};

export default Cart;
