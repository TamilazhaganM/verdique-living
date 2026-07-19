import { NavLink, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  Users,
  LogOut,
  Mail,
  LayoutGrid,
  X,
} from "lucide-react";
import toast from "react-hot-toast";

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    toast.success("Logged out successfully");
    navigate("/login");
  };

  const menu = [
    {
      name: "Dashboard",
      icon: <LayoutDashboard size={20} />,
      path: "/admin/dashboard/stats",
    },
    {
      name: "Products",
      icon: <Package size={20} />,
      path: "/admin/products",
    },
    {
      name: "Orders",
      icon: <ShoppingCart size={20} />,
      path: "/admin/orders",
    },
    {
      name: "Customers",
      icon: <Users size={20} />,
      path: "/admin/customers",
    },
    {
      name: "Contact Enquiries",
      icon: <Mail size={20} />,
      path: "/admin/contact-enquiries",
    },
    {
      name: "Categories",
      icon: <LayoutGrid size={20} />,
      path: "/admin/categories",
    },
  ];

  return (
    <>
      {/* Overlay */}

      <div
        onClick={() => setSidebarOpen(false)}
        className={`fixed inset-0 bg-black/40 z-40 lg:hidden transition-opacity duration-300 ${
          sidebarOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        }`}
      />

      {/* Sidebar */}

      <aside
        className={`
          fixed
          lg:static
          top-0
          left-0
          z-50
          w-64
          h-screen
          bg-white
          shadow-lg
          flex
          flex-col
          transition-transform
          duration-300
          ${
            sidebarOpen
              ? "translate-x-0"
              : "-translate-x-full lg:translate-x-0"
          }
        `}
      >
        {/* Logo */}

        <div className="h-16 border-b flex items-center justify-between px-5">

          <h1 className="text-2xl font-bold text-green-700">
            🌿 Verdique
          </h1>

          <button
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden"
          >
            <X size={22} />
          </button>

        </div>

        {/* Menu */}

        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">

          {menu.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={() => setSidebarOpen(false)}
              className={({ isActive }) =>
                `
                flex
                items-center
                gap-3
                p-3
                rounded-xl
                transition
                ${
                  isActive
                    ? "bg-green-700 text-white"
                    : "text-gray-600 hover:bg-green-100"
                }
              `
              }
            >
              {item.icon}
              <span>{item.name}</span>
            </NavLink>
          ))}

        </nav>

        {/* Logout */}

        <button
          onClick={handleLogout}
          className="
            flex
            items-center
            gap-3
            p-4
            border-t
            text-red-600
            hover:bg-red-50
          "
        >
          <LogOut size={20} />
          Logout
        </button>
      </aside>
    </>
  );
};

export default Sidebar;