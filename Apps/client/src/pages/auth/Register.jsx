import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUser, FaEnvelope, FaLock, FaLeaf } from "react-icons/fa";
import { registerUser } from "../../services/auth.service";
import toast from "react-hot-toast"

const Register = () => {
  const navigate =useNavigate()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
     const response =await registerUser(formData)

      console.log(response);
      navigate("/check-email",{
        state:{
          email:formData.email,
        },
      })
      toast("Account Created successfully")
    } catch (err) {
      console.log(err.response?.data || err.message);
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
        <div className="absolute inset-0 bg-green-950/65"></div>

        <div className="relative z-10 flex flex-col justify-center px-20 text-white">

          <div className="flex items-center gap-3 mb-6">

            <FaLeaf className="text-5xl text-green-300" />

            <h1 className="text-4xl font-bold">
              Verdique Living
            </h1>

          </div>

          <h2 className="text-5xl font-bold leading-tight">

            Bring Nature
            <br />
            Into Everyday Living

          </h2>

          <p className="mt-8 text-lg text-gray-200 leading-8 max-w-md">

            Beautiful landscapes, premium plants and sustainable
            outdoor spaces crafted for modern living.

          </p>

        </div>
      </div>

      {/* RIGHT SIDE */}

      <div className="flex flex-1 justify-center items-center px-6">

        <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-10">

          <div className="text-center">

            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100">

              <FaLeaf className="text-green-700 text-2xl" />

            </div>

            <h2 className="text-4xl font-bold mt-5 text-gray-800">

              Create Account

            </h2>

            <p className="text-gray-500 mt-2">

              Join Verdique Living today

            </p>

          </div>

          <form
            onSubmit={handleSubmit}
            className="mt-10 space-y-6"
          >

            {/* NAME */}

            <div>

              <label className="block text-sm font-semibold text-gray-700 mb-2">

                Full Name

              </label>

              <div className="flex items-center border rounded-xl px-4 py-3 focus-within:ring-2 focus-within:ring-green-700 transition">

                <FaUser className="text-gray-400 mr-3" />

                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full outline-none"
                />

              </div>

            </div>

            {/* EMAIL */}

            <div>

              <label className="block text-sm font-semibold text-gray-700 mb-2">

                Email Address

              </label>

              <div className="flex items-center border rounded-xl px-4 py-3 focus-within:ring-2 focus-within:ring-green-700 transition">

                <FaEnvelope className="text-gray-400 mr-3" />

                <input
                  type="email"
                  name="email"
                  placeholder="john@gmail.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full outline-none"
                />

              </div>

            </div>

            {/* PASSWORD */}

            <div>

              <label className="block text-sm font-semibold text-gray-700 mb-2">

                Password

              </label>

              <div className="flex items-center border rounded-xl px-4 py-3 focus-within:ring-2 focus-within:ring-green-700 transition">

                <FaLock className="text-gray-400 mr-3" />

                <input
                  type="password"
                  name="password"
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full outline-none"
                />

              </div>

            </div>

            {/* BUTTON */}

            <button
              type="submit"
              className="w-full bg-green-700 hover:bg-green-800 transition text-white font-semibold py-4 rounded-xl shadow-lg"
            >

              Create Account

            </button>

          </form>

          <p className="text-center mt-8 text-gray-600">

            Already have an account?

            <Link
              to="/login"
              className="text-green-700 font-semibold ml-2 hover:underline"
            >
              Sign In
            </Link>

          </p>

        </div>

      </div>

    </div>
  );
};

export default Register;