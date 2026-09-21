import { Link } from "react-router-dom";

import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="page-container heroInner">
        <div className="heroContent">
          <p className="heroEyebrow">archive collection</p>

          <h1>
            black girls
            <br />
            set the
            <br />
            tone.
          </h1>

          <p className="heroDescription">
            statement pieces, familiar feelings, and a little something worth
            keeping.
          </p>

          <Link to="/shop" className="heroButton">
            shop the archive
            <span>→</span>
          </Link>
        </div>

        <div className="heroVisual">
        <div className="heroArtwork">
            <img
            src="/images/branding/blkgrlspc.png"
            alt="BLKGRLSPC"
            />
        </div>

        <p className="heroCaption">
            blkgrlspc — made with us in mind.
        </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
