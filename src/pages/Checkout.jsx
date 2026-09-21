import { useState } from "react";
import { Link } from "react-router-dom";

import { useCart } from "../context/CartContext";

import "./Checkout.css";

function Checkout() {
  const { cartItems, cartTotal } = useCart();

  const [checkoutStep, setCheckoutStep] = useState("details");
  const [shippingMethod, setShippingMethod] = useState("");

  const [formData, setFormData] = useState({
    email: "",
    country: "United States",
    firstName: "",
    lastName: "",
    address: "",
    apartment: "",
    city: "",
    state: "",
    postalCode: "",
    phone: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleDetailsSubmit = (event) => {
    event.preventDefault();
    setCheckoutStep("shipping");
    window.scrollTo(0, 0);
  };

  const handleShippingSubmit = (event) => {
    event.preventDefault();

    if (!shippingMethod) {
      return;
    }

    setCheckoutStep("payment");
    window.scrollTo(0, 0);
  };

  const goToDetails = () => {
    setCheckoutStep("details");
    window.scrollTo(0, 0);
  };

  const goToShipping = () => {
    setCheckoutStep("shipping");
    window.scrollTo(0, 0);
  };

  const stepNumber =
    checkoutStep === "details"
      ? 1
      : checkoutStep === "shipping"
        ? 2
        : 3;

  return (
    <div className="checkoutPage">
      <header className="checkoutHeader">
        <Link to="/" className="checkoutLogo">
          <img
            src="/images/branding/blkgrlspc-logo.png"
            alt="blkgrlspc"
          />
        </Link>
      </header>

      <main className="checkoutMain">
        <div className="checkoutContainer">
          <section className="checkoutFormSide">
            <Link to="/shop" className="checkoutBack">
              ← back to shop
            </Link>

            <h1>checkout</h1>

            <div className="checkoutProgress">
              <div
                className={`checkoutStep ${
                  stepNumber >= 1 ? "active" : ""
                }`}
              >
                <span>
                  {stepNumber > 1 ? "✓" : "1"}
                </span>
                <p>details</p>
              </div>

              <div
                className={`checkoutLine ${
                  stepNumber >= 2
                    ? "checkoutLineActive"
                    : ""
                }`}
              />

              <div
                className={`checkoutStep ${
                  stepNumber >= 2 ? "active" : ""
                }`}
              >
                <span>
                  {stepNumber > 2 ? "✓" : "2"}
                </span>
                <p>shipping</p>
              </div>

              <div
                className={`checkoutLine ${
                  stepNumber >= 3
                    ? "checkoutLineActive"
                    : ""
                }`}
              />

              <div
                className={`checkoutStep ${
                  stepNumber >= 3 ? "active" : ""
                }`}
              >
                <span>3</span>
                <p>payment</p>
              </div>
            </div>

            {checkoutStep === "details" && (
              <form
                className="checkoutForm"
                onSubmit={handleDetailsSubmit}
              >
                <section className="checkoutSection">
                  <h2>contact information</h2>

                  <div className="checkoutField">
                    <label htmlFor="email">
                      email address
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </section>

                <section className="checkoutSection">
                  <h2>shipping address</h2>

                  <div className="checkoutField">
                    <label htmlFor="country">
                      country
                    </label>

                    <select
                      id="country"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                    >
                      <option value="United States">
                        United States
                      </option>
                    </select>
                  </div>

                  <div className="checkoutRow">
                    <div className="checkoutField">
                      <label htmlFor="firstName">
                        first name
                      </label>

                      <input
                        id="firstName"
                        name="firstName"
                        type="text"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="checkoutField">
                      <label htmlFor="lastName">
                        last name
                      </label>

                      <input
                        id="lastName"
                        name="lastName"
                        type="text"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="checkoutField">
                    <label htmlFor="address">
                      address
                    </label>

                    <input
                      id="address"
                      name="address"
                      type="text"
                      value={formData.address}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="checkoutField">
                    <label htmlFor="apartment">
                      apartment, suite, unit, building
                      <span> optional</span>
                    </label>

                    <input
                      id="apartment"
                      name="apartment"
                      type="text"
                      value={formData.apartment}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="checkoutAddressRow">
                    <div className="checkoutField">
                      <label htmlFor="city">
                        city
                      </label>

                      <input
                        id="city"
                        name="city"
                        type="text"
                        value={formData.city}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="checkoutField">
                      <label htmlFor="state">
                        state
                      </label>

                      <input
                        id="state"
                        name="state"
                        type="text"
                        value={formData.state}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="checkoutField">
                      <label htmlFor="postalCode">
                        postal code
                      </label>

                      <input
                        id="postalCode"
                        name="postalCode"
                        type="text"
                        value={formData.postalCode}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="checkoutField">
                    <label htmlFor="phone">
                      phone number
                    </label>

                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </section>

                <button
                  type="submit"
                  className="checkoutContinue"
                >
                  <span>continue to shipping</span>
                  <span>→</span>
                </button>
              </form>
            )}

            {checkoutStep === "shipping" && (
              <form
                className="checkoutForm"
                onSubmit={handleShippingSubmit}
              >
                <section className="checkoutSection">
                  <div className="checkoutSectionHeading">
                    <h2>shipping to</h2>

                    <button
                      type="button"
                      onClick={goToDetails}
                    >
                      change
                    </button>
                  </div>

                  <div className="shippingAddressCard">
                    <p>
                      {formData.firstName}{" "}
                      {formData.lastName}
                    </p>

                    <p>{formData.address}</p>

                    {formData.apartment && (
                      <p>{formData.apartment}</p>
                    )}

                    <p>
                      {formData.city},{" "}
                      {formData.state}{" "}
                      {formData.postalCode}
                    </p>

                    <p>{formData.country}</p>

                    <p>{formData.email}</p>
                  </div>
                </section>

                <section className="checkoutSection">
                  <h2>shipping method</h2>

                  <div className="shippingOptions">
                    <label
                      className={`shippingOption ${
                        shippingMethod === "standard"
                          ? "shippingOptionSelected"
                          : ""
                      }`}
                    >
                      <div className="shippingOptionLeft">
                        <input
                          type="radio"
                          name="shippingMethod"
                          value="standard"
                          checked={
                            shippingMethod ===
                            "standard"
                          }
                          onChange={(event) =>
                            setShippingMethod(
                              event.target.value
                            )
                          }
                        />

                        <div>
                          <p>standard shipping</p>
                          <span>
                            standard delivery
                          </span>
                        </div>
                      </div>

                      <span className="shippingPrice">
                        calculated
                      </span>
                    </label>

                    <label
                      className={`shippingOption ${
                        shippingMethod === "priority"
                          ? "shippingOptionSelected"
                          : ""
                      }`}
                    >
                      <div className="shippingOptionLeft">
                        <input
                          type="radio"
                          name="shippingMethod"
                          value="priority"
                          checked={
                            shippingMethod ===
                            "priority"
                          }
                          onChange={(event) =>
                            setShippingMethod(
                              event.target.value
                            )
                          }
                        />

                        <div>
                          <p>priority shipping</p>
                          <span>
                            faster delivery
                          </span>
                        </div>
                      </div>

                      <span className="shippingPrice">
                        calculated
                      </span>
                    </label>
                  </div>
                </section>

                <div className="checkoutActions">
                  <button
                    type="button"
                    className="checkoutSecondary"
                    onClick={goToDetails}
                  >
                    ← back
                  </button>

                  <button
                    type="submit"
                    className="checkoutContinue"
                    disabled={!shippingMethod}
                  >
                    <span>
                      continue to payment
                    </span>
                    <span>→</span>
                  </button>
                </div>
              </form>
            )}

            {checkoutStep === "payment" && (
              <div className="checkoutPayment">
                <section className="checkoutSection">
                  <div className="checkoutSectionHeading">
                    <h2>shipping</h2>

                    <button
                      type="button"
                      onClick={goToShipping}
                    >
                      change
                    </button>
                  </div>

                  <div className="shippingAddressCard">
                    <p>
                      {formData.firstName}{" "}
                      {formData.lastName}
                    </p>

                    <p>
                      {formData.address}
                      {formData.apartment
                        ? `, ${formData.apartment}`
                        : ""}
                    </p>

                    <p>
                      {formData.city},{" "}
                      {formData.state}{" "}
                      {formData.postalCode}
                    </p>

                    <p className="selectedShippingMethod">
                      {shippingMethod === "priority"
                        ? "priority shipping"
                        : "standard shipping"}
                    </p>
                  </div>
                </section>

                <section className="checkoutSection">
                  <h2>payment</h2>

                  <div className="paymentPanel">
                    <p>
                      secure payment options will
                      appear here.
                    </p>

                    <span>
                      your payment information will
                      be handled securely.
                    </span>
                  </div>
                </section>

                <div className="checkoutActions">
                  <button
                    type="button"
                    className="checkoutSecondary"
                    onClick={goToShipping}
                  >
                    ← back
                  </button>

                  <button
                    type="button"
                    className="checkoutContinue"
                    disabled
                  >
                    <span>place order</span>
                    <span>→</span>
                  </button>
                </div>
              </div>
            )}
          </section>

          <aside className="checkoutSummary">
            <h2>order summary</h2>

            <div className="checkoutItems">
              {cartItems.map((item) => (
                <article
                  className="checkoutItem"
                  key={item.cartKey}
                >
                  <div className="checkoutItemImage">
                    <img
                      src={item.image}
                      alt={item.name}
                      style={{
                        objectPosition:
                          item.imagePosition ||
                          "center",
                      }}
                    />

                    <span className="checkoutQuantity">
                      {item.quantity}
                    </span>
                  </div>

                  <div className="checkoutItemInfo">
                    <p className="checkoutItemName">
                      {item.name}
                    </p>

                    {item.variantName && (
                      <p className="checkoutItemVariant">
                        {item.variantName}
                      </p>
                    )}
                  </div>

                  <p className="checkoutItemPrice">
                    $
                    {(
                      item.price *
                      item.quantity
                    ).toFixed(2)}
                  </p>
                </article>
              ))}
            </div>

            <div className="checkoutSummaryLinks">
              <button type="button">
                need to leave a note or
                instructions?
              </button>

              <button type="button">
                have a discount code?
              </button>
            </div>

            <div className="checkoutTotals">
              <div>
                <span>subtotal</span>
                <span>
                  ${cartTotal.toFixed(2)}
                </span>
              </div>

              <div>
                <span>shipping</span>

                <span>
                  {shippingMethod
                    ? "calculated"
                    : "—"}
                </span>
              </div>

              <div>
                <span>tax</span>
                <span>—</span>
              </div>

              <div className="checkoutTotal">
                <span>total</span>

                <span>
                  ${cartTotal.toFixed(2)}
                </span>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}

export default Checkout;
