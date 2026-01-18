import { useDispatch } from "react-redux";
import { clearCart } from "../features/cart/cartSlice";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const placeOrder = () => {
    alert("Order placed");
    dispatch(clearCart());
    navigate("/");
  };

  return (
    <form>
      <input placeholder="Name" required />
      <input placeholder="Address" required />
      <button type="button" onClick={placeOrder}>
        Place Order
      </button>
    </form>
  );
};

export default Checkout;
