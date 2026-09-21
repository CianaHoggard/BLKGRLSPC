import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useCart } from "../context/CartContext";

import "./Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const {
    cartCount,
    openCart,
  } = useCart();

  return (
    <header className="siteHeader">
      <div className="page-container headerInner">
        <Link to="/" className="brand" onClick={closeMenu}>
          blkgrlspc
        </Link>

        <nav className="desktopNav">
          <NavLink to="/shop">shop</NavLink>
          <NavLink to="/archive">archive</NavLink>
          <NavLink to="/about">about</NavLink>
          <NavLink to="/contact">contact</NavLink>

        <button
            className="bagButton"
            onClick={openCart}
          >
            bag <span>({cartCount})</span>
        </button>
        </nav>

        <button
          className="mobileMenuButton"
          onClick={() => setMenuOpen((current) => !current)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? "close" : "menu"}
        </button>
      </div>

      {menuOpen && (
      <div className="mobileMenu">
        <div className="mobileMenuTop">
          <Link to="/" className="mobileMenuBrand" onClick={closeMenu}>
            blkgrlspc
          </Link>

          <button
            className="mobileMenuClose"
            onClick={closeMenu}
          >
            close
          </button>
        </div>

        <nav>
          <NavLink to="/shop" onClick={closeMenu}>
            shop
          </NavLink>

          <NavLink to="/archive" onClick={closeMenu}>
            archive
          </NavLink>

          <NavLink to="/about" onClick={closeMenu}>
            about
          </NavLink>

          <NavLink to="/contact" onClick={closeMenu}>
            contact
          </NavLink>

          <button
            className="mobileBagButton"
            onClick={() => {
              closeMenu();
              openCart();
            }}
          >
            bag ({cartCount})
          </button>
        </nav>

        <div className="mobileMenuBottom">
          <span>blkgrlspc</span>
          <span>archive era</span>
        </div>
      </div>
    )}
    </header>
  );
}

export default Header;
