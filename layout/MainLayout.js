import React from "react";
import Header from "../components/GuestComponents/Header";
import Footer from "../components/GuestComponents/Footer";
function MainLayout({children}) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default MainLayout;
