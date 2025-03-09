import { Outlet } from "react-router-dom";
import LeftSidebar from "./components/Sidebars/LeftSideBar/LeftSideBar";
import RightSidebar from "./components/Sidebars/RightSideBar/RightSideBar";
import Navbar from "./components/Navbar/Navbar";

export default function Layout() {
  return (
    <>
      <Navbar />
      <div className="container">
        <LeftSidebar />
        <main>
          <Outlet />
        </main>
        <RightSidebar />
      </div>
    </>
  );
}
