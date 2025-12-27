import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <Link to={`/product/${product.id}`}>
      <article>
        <h2>{product.title}</h2>
        <img src={product.image.url} alt={product.image.alt} width={200} />
        <p>{product.discountedPrice}</p>
      </article>
    </Link>
  );
}

export default ProductCard;
