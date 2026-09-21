import { Link } from "react-router-dom";

import { useCart } from "../context/CartContext";

import "./CartDrawer.css";

function CartDrawer() {
  const {
    cartItems,
    isCartOpen,
    cartTotal,
    closeCart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useCart();

  return (
    <>
      <div
        className={`cartOverlay ${
          isCartOpen ? "cartOverlayOpen" : ""
        }`}
        onClick={closeCart}
      />

      <aside
        className={`cartDrawer ${
          isCartOpen ? "cartDrawerOpen" : ""
        }`}
        aria-hidden={!isCartOpen}
      >
        <div className="cartHeader">
          <div>
            <p className="cartEyebrow">
              blkgrlspc
            </p>

            <h2>your bag.</h2>
          </div>

          <button
            className="cartClose"
            onClick={closeCart}
            aria-label="Close cart"
          >
            ×
          </button>
        </div>

        {cartItems.length === 0 ? (
          <div className="emptyCart">
            <p>your bag is empty.</p>

            <Link
              to="/shop"
              onClick={closeCart}
            >
              shop what&apos;s left →
            </Link>
          </div>
        ) : (
          <>
            <div className="cartItems">
              {cartItems.map((item) => (
                <article
                  className="cartItem"
                  key={item.cartKey}
                >
                  <Link
                    to={`/product/${item.slug}`}
                    className="cartItemImage"
                    onClick={closeCart}
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      style={{
                        objectPosition:
                          item.imagePosition,
                      }}
                    />
                  </Link>

                  <div className="cartItemInfo">
                    <div className="cartItemTop">
                      <div>
                        <Link
                          to={`/product/${item.slug}`}
                          onClick={closeCart}
                        >
                          <h3>{item.name}</h3>
                        </Link>

                        {item.variantName && (
                          <p className="cartVariant">
                            {item.variantName}
                          </p>
                        )}
                      </div>

                      <p className="cartItemPrice">
                        $
                        {(
                          item.price * item.quantity
                        ).toFixed(2)}
                      </p>
                    </div>

                    <div className="cartItemBottom">
                      <div className="quantityControls">
                        <button
                          onClick={() =>
                            decreaseQuantity(
                              item.cartKey
                            )
                          }
                          aria-label={`Decrease ${item.name} quantity`}
                        >
                          −
                        </button>

                        <span>
                          {item.quantity}
                        </span>

                        <button
                          onClick={() =>
                            increaseQuantity(
                              item.cartKey
                            )
                          }
                          aria-label={`Increase ${item.name} quantity`}
                        >
                          +
                        </button>
                      </div>

                      <button
                        className="removeItem"
                        onClick={() =>
                          removeFromCart(
                            item.cartKey
                          )
                        }
                      >
                        remove
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="cartFooter">
              <div className="cartSubtotal">
                <span>subtotal</span>

                <span>
                  ${cartTotal.toFixed(2)}
                </span>
              </div>

              <p className="cartShipping">
                shipping calculated at checkout.
              </p>

            <Link
                to="/checkout"
                className="checkoutButton"
                onClick={closeCart}
                >
                <span>checkout</span>
                <span>→</span>
            </Link>
            </div>
          </>
        )}
      </aside>
    </>
  );
}

export default CartDrawer;
