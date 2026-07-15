import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  Settings,
  LogOut,
} from "lucide-react";

const Sidebar = () => {
  const menu = [
    { name: "Dashboard", icon: <LayoutDashboard size={20} />, path: "/dashboard" },
    { name: "Products", icon: <Package size={20} />, path: "/products" },
    { name: "Orders", icon: <ShoppingCart size={20} />, path: "/orders" },
    { name: "Settings", icon: <Settings size={20} />, path: "/settings" },
  ];

  return (
    <aside className="w-64 bg-white shadow-lg flex flex-col">

      <div className="h-16 flex items-center justify-center border-b">
        <h1 className="text-2xl font-bold text-green-700">
          🌿 Verdique
        </h1>
      </div>

      <nav className="flex-1 p-4 space-y-2">

        {menu.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 p-3 rounded-lg transition ${
                isActive
                  ? "bg-green-700 text-white"
                  : "text-gray-600 hover:bg-green-100"
              }`
            }
          >
            {item.icon}
            {item.name}
          </NavLink>
        ))}

      </nav>

      <button className="flex items-center gap-3 p-4 text-red-600 hover:bg-red-50 border-t">
        <LogOut size={20} />
        Logout
      </button>

    </aside>
  );
};

export default Sidebar;