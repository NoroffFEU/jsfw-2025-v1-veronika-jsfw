import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SearchBar.module.css";

function SearchBar({ products }) {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const filteredProducts =
    query.length > 0
      ? products.filter((product) =>
          product.title.toLowerCase().includes(query.toLowerCase())
        )
      : [];

  function handleSelect(id) {
    setQuery("");
    navigate(`/product/${id}`);
  }

  return (
    <div className={styles.wrapper}>
      <input
        type="search"
        placeholder="Search products..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className={styles.input}
        aria-label="Search products"
      />

      {filteredProducts.length > 0 && (
        <ul className={styles.dropdown}>
          {filteredProducts.map((product) => (
            <li
              key={product.id}
              className={styles.item}
              onClick={() => handleSelect(product.id)}
            >
              <img
                src={product.image.url}
                alt={product.image.alt}
                className={styles.thumbnail}
              />
              <span>{product.title}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SearchBar;
