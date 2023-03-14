import React, {useState} from "react";
import Header from "../components/DashboardComponents/Header";
import Sidebar from "../components/DashboardComponents/Sidebar";

function DashboardLayout({children, user}) {
  const [openSidebar, setOpenSidebar] = useState(false);
  const handleSidebar = () => {
    setOpenSidebar(!openSidebar);
  };
  return (
    <div className="flex flex-col min-h-screen bg-main">
      <Header handleSidebar={handleSidebar} user={user} />
      <div className="flex flex-grow h-full">
        <Sidebar openSidebar={openSidebar} />
        <main className="flex-1 p-4 mt-16">{children}</main>
      </div>
    </div>
  );
}

export default DashboardLayout;
