import { Outlet } from "react-router-dom";
import Navbar from "../components/customer/Navbar";
import Footer from "../components/customer/Footer";
import CartDrawer from "../components/customer/CartDrawer";


const CustomerLayout = () => {
  return (
    <div className="min-h-screen bg-[#FAF8F3] text-gray-800">
      <Navbar />

      <main>
        <Outlet />
      </main>

      <Footer />
      <CartDrawer />  
    </div>
  );
};

export default CustomerLayout;