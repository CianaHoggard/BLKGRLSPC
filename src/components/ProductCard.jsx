import { Link } from "react-router-dom";
import "./ProductCard.css";

function ProductCard({ product }) {
  const hasVariants = product.variants?.length > 0;

  const variantPrices = hasVariants
    ? product.variants.map((variant) => variant.price)
    : [];

  const minPrice = hasVariants
    ? Math.min(...variantPrices)
    : product.price;

  const maxPrice = hasVariants
    ? Math.max(...variantPrices)
    : product.price;

  return (
    <Link
      to={`/product/${product.slug}`}
      className="productCard"
    >
      <div className="productCardImage">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          style={{
            objectPosition: product.imagePosition || "center",
          }}
        />
      </div>

      <div className="productCardInfo">
        <div>
          <p className="productType">
            {hasVariants
              ? "pin / sticker"
              : product.subtitle}
          </p>

          <h3>{product.name}</h3>
        </div>

        <div className="productPrice">
          {hasVariants ? (
            <span>
              ${minPrice.toFixed(2)} – ${maxPrice.toFixed(2)}
            </span>
          ) : (
            <span>${product.price.toFixed(2)}</span>
          )}
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
