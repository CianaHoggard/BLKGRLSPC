import { Outlet } from "react-router-dom";

import AnnouncementBar from "../components/AnnouncementBar";
import Header from "../components/Header";
import CartDrawer from "../components/CartDrawer";
import Footer from "../components/Footer";

function RootLayout() {
  return (
    <>
      <AnnouncementBar />

      <Header />

      <main>
        <Outlet />
      </main>

      <Footer />

      <CartDrawer />
    </>
  );
}

export default RootLayout;
