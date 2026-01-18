import useFetchProducts from "../hooks/useFetchProducts";
import ProductItem from "./ProductItem";
import { useSelector } from "react-redux";

const ProductList = () => {
  const { products, error } = useFetchProducts();
  const search = useSelector(state => state.search);

  if (error) return <p>{error}</p>;

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="product-grid">
      {filteredProducts.length === 0 ? (
        <p>No products found</p>
      ) : (
        filteredProducts.map(product => (
          <ProductItem key={product.id} product={product} />
        ))
      )}
    </div>
  );
};

export default ProductList;
