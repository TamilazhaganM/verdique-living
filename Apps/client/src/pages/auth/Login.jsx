import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaLeaf,
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";
import { loginUser } from "../../services/auth.service";
import { useDispatch } from "react-redux";
import { setWishlist } from "../../redux/slices/wishlistSlice";
import { getWishlist } from "../../services/wishlist.service";
import logo from "../../assets/images/Verdique-logo.jpg"

const Login = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [showPassword, setShowPassword] = useState(false);

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await loginUser(formData);

      localStorage.setItem("token", response.accessToken);

      const wishlistResponse = await getWishlist();

      dispatch(setWishlist(wishlistResponse.data));

      if (response.user.role === "admin") {
        navigate("/admin/dashboard/stats");
      } else if(response.user.role === "user") {
        navigate("/");
      } else{
        navigate("/login")
      }
    } catch (err) {
      console.log(err.response?.data || err.message);
      alert("Invalid Email or Password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex bg-[#F7FAF7]">

      {/* LEFT SIDE */}

      <div
        className="hidden lg:flex lg:w-1/2 relative bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-green-950/70"></div>

        <div className="relative z-10 flex flex-col justify-center px-20 text-white">

          <div className="flex items-center gap-3 mb-6">

            <img src={logo} className="text-5xl text-green-300 rounded-full w-12 h-12" />

            <h1 className="text-4xl font-bold">
              Verdique Living
            </h1>

          </div>

          <h2 className="text-5xl font-bold leading-tight">

            Welcome Back

          </h2>

          <p className="mt-8 text-lg text-gray-200 leading-8 max-w-md">

            Sign in to manage your plants, explore premium landscapes,
            and continue your green living journey.

          </p>

        </div>
      </div>

      {/* RIGHT SIDE */}

      <div className="flex flex-1 justify-center items-center px-6">

        <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-10">

          <div className="text-center">

            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100">

              <img src={logo} className="text-green-700 text-2xl rounded-full" />

            </div>

            <h2 className="text-4xl font-bold mt-5 text-gray-800">

              Welcome Back

            </h2>

            <p className="text-gray-500 mt-2">

              Sign in to your account

            </p>

          </div>

          <form
            onSubmit={handleLogin}
            className="mt-10 space-y-6"
          >

            {/* EMAIL */}

            <div>

              <label className="block text-sm font-semibold text-gray-700 mb-2">

                Email Address

              </label>

              <div className="flex items-center border rounded-xl px-4 py-3 focus-within:ring-2 focus-within:ring-green-700">

                <FaEnvelope className="text-gray-400 mr-3" />

                <input
                  type="email"
                  name="email"
                  placeholder="john@gmail.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full outline-none"
                  required
                />

              </div>

            </div>

            {/* PASSWORD */}

            <div>

              <label className="block text-sm font-semibold text-gray-700 mb-2">

                Password

              </label>

              <div className="flex items-center border rounded-xl px-4 py-3 focus-within:ring-2 focus-within:ring-green-700">

                <FaLock className="text-gray-400 mr-3" />

                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full outline-none"
                  required
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowPassword(!showPassword)
                  }
                >
                  {showPassword ? (
                    <FaEyeSlash className="text-gray-400" />
                  ) : (
                    <FaEye className="text-gray-400" />
                  )}
                </button>

              </div>

            </div>

            {/* Forgot Password */}

            <div className="flex justify-end">

              <Link
                to="/forgot-password"
                className="text-sm text-green-700 hover:underline"
              >
                Forgot Password?
              </Link>

            </div>

            {/* Button */}

            <button
              disabled={loading}
              className="w-full bg-green-700 hover:bg-green-800 transition text-white font-semibold py-4 rounded-xl shadow-lg disabled:opacity-70"
            >

              {loading ? "Signing In..." : "Sign In"}

            </button>

          </form>

          <p className="text-center mt-8 text-gray-600">

            Don't have an account?

            <Link
              to="/register"
              className="text-green-700 font-semibold ml-2 hover:underline"
            >
              Create Account
            </Link>

          </p>

        </div>

      </div>

    </div>
  );
};

export default Login;