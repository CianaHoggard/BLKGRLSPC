import { Link } from "react-router-dom";

import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="page-container footerInner">
        <div className="footerBrand">
          <p>blkgrlspc</p>

          <h2>
            made for the
            <br />
            culture.
          </h2>
        </div>

        <div className="footerLinks">
          <div>
            <p className="footerLabel">explore</p>

            <Link to="/shop">shop</Link>
            <Link to="/about">about</Link>
            <Link to="/contact">contact</Link>
          </div>

          <div>
            <p className="footerLabel">social</p>

            <a href="#" target="_blank" rel="noreferrer">
              instagram ↗
            </a>
          </div>
        </div>
      </div>

      <div className="page-container footerBottom">
        <span>© {new Date().getFullYear()} blkgrlspc</span>
        <span>all rights reserved</span>
      </div>
    </footer>
  );
}

export default Footer;
