import Hero from "../components/Hero";
import ProductGrid from "../components/ProductGrid";

import "./Home.css";

function Home() {
  return (
    <>
      <Hero />

      <section className="introSection">
        <div className="page-container introGrid">
          <p className="introLabel">blkgrlspc</p>

          <h2>
            pieces made to celebrate the girls who have always set the tone.
          </h2>
        </div>
      </section>
    <ProductGrid />
      <section className="statementSection">
        <div className="page-container">
          <p>because we know who set the trends.</p>
        </div>
      </section>
    </>
  );
}

export default Home;
