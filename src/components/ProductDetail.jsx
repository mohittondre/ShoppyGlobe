import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data));
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="product-detail-container">
      <div className="product-detail-card">
        <div className="product-detail-img">
          <img src={product.thumbnail} alt={product.title} />
        </div>

        <div className="product-detail-info">
          <h1>{product.title}</h1>
          <p className="detail-price">${product.price}</p>
          <p className="detail-desc">{product.description}</p>

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

export default ProductDetail;
