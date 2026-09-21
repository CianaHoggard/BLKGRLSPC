import { useState } from "react";
import { Link, useParams } from "react-router-dom";

import { useCart } from "../context/CartContext";
import products from "../data/products";
import ProductCard from "../components/ProductCard";

import "./Product.css";

function Product() {
  const { slug } = useParams();

  const { addToCart } = useCart();

  const product = products.find(
    (item) => item.slug === slug
  );

  const [selectedVariant, setSelectedVariant] =
    useState("");

  if (!product) {
    return (
      <section className="productNotFound">
        <div className="page-container">
          <h1>product not found.</h1>

          <Link to="/shop">
            back to shop →
          </Link>
        </div>
      </section>
    );
  }

  const hasVariants = product.variants?.length > 0;

  const chosenVariant = hasVariants
    ? product.variants.find(
        (variant) =>
          variant.id === selectedVariant
      )
    : null;

  const prices = hasVariants
    ? product.variants.map(
        (variant) => variant.price
      )
    : [];

  const minPrice = hasVariants
    ? Math.min(...prices)
    : product.price;

  const maxPrice = hasVariants
    ? Math.max(...prices)
    : product.price;

  const recommendations = products
    .filter(
      (item) => item.id !== product.id
    )
    .slice(0, 4);

  const handleAddToBag = () => {
    if (hasVariants && !chosenVariant) {
      return;
    }

    addToCart(
      product,
      chosenVariant || null
    );
  };

  return (
    <>
      <section className="productPage">
        <div className="page-container productLayout">
          <div className="productMainImage">
            <img
              src={product.image}
              alt={product.name}
              style={{
                objectPosition:
                  product.imagePosition ||
                  "center",
              }}
            />
          </div>

          <div className="productDetails">
            <p className="productCategory">
              {hasVariants
                ? "pin / sticker"
                : product.subtitle}
            </p>

            <h1>{product.name}</h1>

            <div className="productPagePrice">
              {chosenVariant ? (
                <span>
                  $
                  {chosenVariant.price.toFixed(
                    2
                  )}
                </span>
              ) : hasVariants ? (
                <span>
                  ${minPrice.toFixed(2)} – $
                  {maxPrice.toFixed(2)}
                </span>
              ) : (
                <span>
                  ${product.price.toFixed(2)}
                </span>
              )}
            </div>

            {hasVariants && (
              <div className="variantSelector">
                <label htmlFor="productVariant">
                  choose your option
                </label>

                <select
                  id="productVariant"
                  value={selectedVariant}
                  onChange={(event) =>
                    setSelectedVariant(
                      event.target.value
                    )
                  }
                >
                  <option value="">
                    select option
                  </option>

                  {product.variants.map(
                    (variant) => (
                      <option
                        key={variant.id}
                        value={variant.id}
                      >
                        {variant.name} — $
                        {variant.price.toFixed(
                          2
                        )}
                      </option>
                    )
                  )}
                </select>
              </div>
            )}

            <button
              className="addToBagButton"
              disabled={
                hasVariants &&
                !chosenVariant
              }
              onClick={handleAddToBag}
            >
              <span>
                {hasVariants &&
                !chosenVariant
                  ? "choose an option"
                  : "add to bag"}
              </span>

              <span>→</span>
            </button>

            <div className="productDescription">
              {product.description?.map(
                (
                  paragraph,
                  index
                ) => (
                  <p key={index}>
                    {paragraph}
                  </p>
                )
              )}

              {product.details && (
                <div className="productDetailsList">
                  <p className="detailsHeading">
                    details
                  </p>

                  <ul>
                    {product.details.map(
                      (
                        detail,
                        index
                      ) => (
                        <li key={index}>
                          {detail}
                        </li>
                      )
                    )}
                  </ul>
                </div>
              )}

              {product.closing && (
                <p className="productClosing">
                  {product.closing}
                </p>
              )}
            </div>

            <div className="productFinePrint">
              <p>
                limited archive inventory
              </p>

              <p>
                no restocks once sold out
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relatedProducts">
        <div className="page-container">
          <div className="relatedHeading">
            <p>
              you might also like
            </p>

            <Link to="/shop">
              shop all →
            </Link>
          </div>

          <div className="relatedGrid">
            {recommendations.map(
              (item) => (
                <ProductCard
                  key={item.id}
                  product={item}
                />
              )
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default Product;
