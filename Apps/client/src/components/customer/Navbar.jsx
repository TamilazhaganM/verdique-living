import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toggleCart } from "../../redux/slices/uiSlice";
import logo from "../../../public/verdique logo.jpg"
import {
  Menu,
  X,
  Search,
  Heart,
  ShoppingCart,
  Leaf,
} from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);
  const wishlistItems = useSelector((state) => state.wishlist.items);

  const wishlistCount = wishlistItems.length;

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const navLinkClass = ({ isActive }) =>
    `transition font-medium ${
      isActive
        ? "text-green-700"
        : "text-gray-700 hover:text-green-700"
    }`;

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
       isScrolled || isOpen
  ? "bg-white  shadow-md"
  : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">

        <div className="h-16 sm:h-20 flex items-center justify-between">

          {/* Logo */}

          <Link
            to="/"
            className="flex items-center gap-2"
          >
          <img className="w-10 h-10 rounded-full" src={logo} alt="" srcset=""/>
            {/* <Leaf
              className="text-green-700"
              size={30}
            /> */}

            <div>

              <h1 className="text-xl sm:text-2xl font-bold text-green-700">
                Verdique
              </h1>

              <p className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-gray-500">
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

            <Link to="/shop" className="hover:text-green-700 transition">
              <Search />
            </Link>

            <Link
              to="/wishlist"
              className="relative hover:text-green-700"
            >
              <Heart
                className={
                  wishlistCount
                    ? "fill-red-500 text-red-500"
                    : ""
                }
              />

              {wishlistCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center">
                  {wishlistCount > 99
                    ? "99+"
                    : wishlistCount}
                </span>
              )}

            </Link>

            <button
              onClick={() =>
                dispatch(toggleCart())
              }
              className="relative hover:text-green-700"
            >
              <ShoppingCart />

              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-green-700 text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center">
                  {cartCount > 99
                    ? "99+"
                    : cartCount}
                </span>
              )}

            </button>

            <Link
              to="/login"
              className="bg-green-700 hover:bg-green-800 text-white px-5 py-2 rounded-xl"
            >
              Login
            </Link>

          </div>

          {/* Mobile Menu Button */}

          {/* Mobile Right Icons */}

<div className="lg:hidden flex items-center gap-4">

  {/* Wishlist */}

  <Link
    to="/wishlist"
    className="relative"
  >
    <Heart
      size={24}
      className={
        wishlistCount
          ? "fill-red-500 text-red-500"
          : "text-gray-700"
      }
    />

    {wishlistCount > 0 && (
      <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center">
        {wishlistCount > 99 ? "99+" : wishlistCount}
      </span>
    )}
  </Link>

  {/* Cart */}

  <button
    onClick={() => dispatch(toggleCart())}
    className="relative"
  >
    <ShoppingCart
      size={24}
      className="text-gray-700"
    />

    {cartCount > 0 && (
      <span className="absolute -top-2 -right-2 bg-green-700 text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center">
        {cartCount > 99 ? "99+" : cartCount}
      </span>
    )}
  </button>

  {/* Hamburger */}

  <button
    onClick={() => setIsOpen(true)}
    className="p-1"
  >
    <Menu size={28} />
  </button>

</div>

        </div>

      </div>

      {/* Overlay */}

      <div
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 bg-black/40 transition-opacity duration-300 lg:hidden ${
          isOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        }`}
      />

      {/* Drawer */}

      <aside
        className={`fixed top-0 right-0 h-full w-[85%] max-w-xs bg-white shadow-2xl transition-transform duration-300 z-50 lg:hidden ${
          isOpen
            ? "translate-x-0"
            : "translate-x-full"
        }`}
      >

  <div className="sticky top-0 bg-white flex justify-between items-center p-6 border-b z-10">

          <h2 className="text-xl font-bold">
            Menu
          </h2>

          <button
            onClick={() => setIsOpen(false)}
          >
            <X />
          </button>

        </div>

        <nav className="flex flex-col gap-6 p-6">

          <NavLink
            to="/"
            onClick={() => setIsOpen(false)}
            className={navLinkClass}
          >
            Home
          </NavLink>

          <NavLink
            to="/shop"
            onClick={() => setIsOpen(false)}
            className={navLinkClass}
          >
            Shop
          </NavLink>

          <NavLink
            to="/categories"
            onClick={() => setIsOpen(false)}
            className={navLinkClass}
          >
            Categories
          </NavLink>

          <NavLink
            to="/about"
            onClick={() => setIsOpen(false)}
            className={navLinkClass}
          >
            About
          </NavLink>

          <NavLink
            to="/contact"
            onClick={() => setIsOpen(false)}
            className={navLinkClass}
          >
            Contact
          </NavLink>

          <hr />

          {/* <div className="flex items-center justify-around">

            <Search />

            <Link
              to="/wishlist"
              onClick={() =>
                setIsOpen(false)
              }
              className="relative"
            >
              <Heart
                className={
                  wishlistCount
                    ? "fill-red-500 text-red-500"
                    : ""
                }
              />

              {wishlistCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center">
                  {wishlistCount}
                </span>
              )}

            </Link>

            <button
              onClick={() => {
                dispatch(toggleCart());
                setIsOpen(false);
              }}
              className="relative"
            >
              <ShoppingCart />

              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-green-700 text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}

            </button>

          </div> */}

          <Link
            to="/login"
            onClick={() =>
              setIsOpen(false)
            }
            className="mt-6 bg-green-700 hover:bg-green-800 text-white text-center py-3 rounded-xl"
          >
            Login
          </Link>

        </nav>

      </aside>

    </header>
  );
};

export default Navbar;