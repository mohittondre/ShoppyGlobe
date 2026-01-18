import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div className="product-card">
      <div className="img-wrapper">
        <img
          src={product.thumbnail}
          alt={product.title}
          loading="lazy"
        />
      </div>

      <div className="product-info">
        <h3>{product.title}</h3>
        <p className="price">${product.price}</p>

        <div className="product-actions">
          <Link to={`/product/${product.id}`} className="btn outline">
            View
          </Link>

          <button
            className="btn"
            onClick={() => dispatch(addToCart(product))}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
