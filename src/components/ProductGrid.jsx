import products from "../data/products";
import ProductCard from "./ProductCard";

import "./ProductGrid.css";

function ProductGrid() {
  const featuredProducts = products.filter(
    (product) => product.featured
  );

  return (
    <section className="productsSection">
      <div className="page-container">
        <div className="productsHeading">
          <p>the archive</p>

          <h2>shop what's left.</h2>

          <span>{featuredProducts.length} pieces</span>
        </div>

        <div className="productGrid">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductGrid;
