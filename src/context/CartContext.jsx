import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("blkgrlspc-cart");

    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem(
      "blkgrlspc-cart",
      JSON.stringify(cartItems)
    );
  }, [cartItems]);

  const openCart = () => {
    setIsCartOpen(true);
  };

  const closeCart = () => {
    setIsCartOpen(false);
  };

  const addToCart = (product, variant = null) => {
    const cartKey = variant
      ? `${product.id}-${variant.id}`
      : `${product.id}`;

    const itemPrice = variant
      ? variant.price
      : product.price;

    setCartItems((currentItems) => {
      const existingItem = currentItems.find(
        (item) => item.cartKey === cartKey
      );

      if (existingItem) {
        return currentItems.map((item) =>
          item.cartKey === cartKey
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        );
      }

      return [
        ...currentItems,
        {
          cartKey,
          productId: product.id,
          slug: product.slug,
          name: product.name,
          image: product.image,
          imagePosition:
            product.imagePosition || "center",
          variantId: variant?.id || null,
          variantName: variant?.name || null,
          price: itemPrice,
          quantity: 1,
        },
      ];
    });

    setIsCartOpen(true);
  };

  const increaseQuantity = (cartKey) => {
    setCartItems((currentItems) =>
      currentItems.map((item) =>
        item.cartKey === cartKey
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    );
  };

  const decreaseQuantity = (cartKey) => {
    setCartItems((currentItems) =>
      currentItems
        .map((item) =>
          item.cartKey === cartKey
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeFromCart = (cartKey) => {
    setCartItems((currentItems) =>
      currentItems.filter(
        (item) => item.cartKey !== cartKey
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const cartTotal = cartItems.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        isCartOpen,
        cartCount,
        cartTotal,
        openCart,
        closeCart,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
