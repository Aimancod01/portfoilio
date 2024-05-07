import { Outlet } from "react-router-dom";
import "../App.css";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
function AppLayout({ isOpen, setIsOpen }) {
  return (
    <>
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="main-content">
        <Navbar />
        <section className={isOpen && "mt-96 lg:mt-0"}>
          <Outlet />
        </section>
      </div>
    </>
  );
}

export default AppLayout;
