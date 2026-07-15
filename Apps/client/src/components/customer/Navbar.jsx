import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom"; 
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { toggleCart } from "../../redux/slices/uiSlice";
import {
  Menu,
  X,
  Search,
  Heart,
  ShoppingCart,
  User,
  Leaf,
} from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const cartCount = cartItems.reduce(
  (total, item) => total + item.quantity,
  0
);
{cartCount > 99 ? "99+" : cartCount}

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinkClass = ({ isActive }) =>
    `transition duration-300 font-medium ${
      isActive
        ? "text-green-700"
        : "text-gray-700 hover:text-green-700"
    }`;

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-xl shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="h-20 flex items-center justify-between">

          {/* Logo */}

          <Link
            to="/"
            className="flex items-center gap-2"
          >
            <Leaf
              className="text-green-700"
              size={32}
            />

            <div>

              <h1 className="text-2xl font-bold text-green-700">
                Verdique
              </h1>

              <p className="text-xs tracking-[0.25em] text-gray-500 uppercase">
                Living
              </p>

            </div>

          </Link>

          {/* Desktop */}

          <nav className="hidden lg:flex items-center gap-10">

            <NavLink to="/" className={navLinkClass}>
              Home
            </NavLink>

            <NavLink to="/shop" className={navLinkClass}>
              Shop
            </NavLink>

            <NavLink to="/categories" className={navLinkClass}>
              Categories
            </NavLink>

            <NavLink to="/about" className={navLinkClass}>
              About
            </NavLink>

            <NavLink to="/contact" className={navLinkClass}>
              Contact
            </NavLink>

          </nav>

          {/* Desktop Icons */}

          <div className="hidden lg:flex items-center gap-5">

            <button className="hover:text-green-700 transition">
              <Search />
            </button>

            <button className="hover:text-green-700 transition">
              <Heart />
            </button>

            <button onClick={() => dispatch(toggleCart())} className="hover:text-green-700 transition relative">

              <ShoppingCart />

              {cartCount > 0 && (

        <span
            className="
            absolute
            -top-2
            -right-2
            bg-green-700
            text-white
            text-xs
            w-5
            h-5
            rounded-full
            flex
            items-center
            justify-center
            font-semibold
            "
        >

            {cartCount}

        </span>

    )}

            </button>

            <Link
              to="/login"
              className="bg-green-700 hover:bg-green-800 text-white px-5 py-2 rounded-xl transition"
            >
              Login
            </Link>

          </div>

          {/* Mobile */}

          <button
            onClick={() => setIsOpen(true)}
            className="lg:hidden"
          >
            <Menu size={30} />
          </button>

        </div>

      </div>

      {/* Mobile Drawer */}

      <div
        className={`fixed top-0 right-0 h-full w-72 bg-white shadow-2xl transition-transform duration-300 lg:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-6 border-b">

          <h2 className="text-xl font-bold">
            Menu
          </h2>

          <button onClick={() => setIsOpen(false)}>
            <X />
          </button>

        </div>

        <div className="flex flex-col p-6 gap-6">

          <NavLink to="/" onClick={() => setIsOpen(false)}>
            Home
          </NavLink>

          <NavLink to="/shop" onClick={() => setIsOpen(false)}>
            Shop
          </NavLink>

          <NavLink to="/categories" onClick={() => setIsOpen(false)}>
            Categories
          </NavLink>

          <NavLink to="/about" onClick={() => setIsOpen(false)}>
            About
          </NavLink>

          <NavLink to="/contact" onClick={() => setIsOpen(false)}>
            Contact
          </NavLink>

          <Link
            to="/login"
            className="bg-green-700 text-white text-center py-3 rounded-xl mt-6"
          >
            Login
          </Link>

        </div>

      </div>

    </header>
  );
};

export default Navbar;