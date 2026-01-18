import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setSearch } from "../features/products/searchSlice";

const Header = () => {
  const cart = useSelector(state => state.cart);
  const search = useSelector(state => state.search);
  const dispatch = useDispatch();

  return (
    <header className="navbar">
      {/* LOGO → HOME */}
      <Link to="/" className="logo">
        ShoppyGlobe
      </Link>

      <div className="nav-center">
        <input
          type="text"
          placeholder="Search products..."
          className="search-input"
          value={search}
          onChange={(e) => dispatch(setSearch(e.target.value))}
        />
      </div>

      <div className="nav-right">
        <Link to="/cart" className="cart-link">
          Cart
          <span className="cart-count">{cart.length}</span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
