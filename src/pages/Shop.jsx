import ProductCard from "../components/ProductCard";
import products from "../data/products";

import "./Shop.css";

function Shop() {
  return (
    <section className="shopPage">
      <div className="page-container">
        <div className="shopHeader">
          <div>
            <p className="shopEyebrow">the final collection</p>

            <h1>
              shop what&apos;s
              <br />
              left.
            </h1>
          </div>

          <p className="shopIntro">
            Limited quantities. No restocks.
            <br />
            When it&apos;s gone, it&apos;s gone.
          </p>
        </div>

        <div className="shopToolbar">
          <p>{products.length} pieces</p>

          <div className="shopCategories">
            <button>all</button>
            <button>pins</button>
            <button>accessories</button>
          </div>
        </div>

        <div className="shopGrid">
          {products.map((product) => (
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

export default Shop;
