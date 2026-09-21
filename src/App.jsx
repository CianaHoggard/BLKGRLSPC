import { Routes, Route } from "react-router-dom";

import RootLayout from "./layouts/RootLayout";

import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Product from "./pages/Product";
import Archive from "./pages/Archive";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Checkout from "./pages/Checkout";

import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <ScrollToTop />

      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product/:slug" element={<Product />} />
          <Route path="/archive" element={<Archive />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>

        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </>
  );
}

export default App;
