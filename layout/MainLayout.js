import React from "react";
import Header from "../components/GuestComponents/Header";
import Footer from "../components/GuestComponents/Footer";
function MainLayout({children, activeLink}) {
  return (
    <div className="flex flex-col bg-main min-h-screen">
      <Header activeLink={activeLink} />
      {/* <main className="flex-grow">{children}</main> */}
      {children}
      <Footer />
    </div>
  );
}

export default MainLayout;
