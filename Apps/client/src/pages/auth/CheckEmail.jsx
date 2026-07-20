import { Link,useLocation } from "react-router-dom";
import { FaEnvelopeOpenText, FaLeaf } from "react-icons/fa";
import logo from "../../../public/Verdique logo.jpg"

const CheckEmail = () => {
  const location = useLocation();
  const email = location.state?.email || "Email not available";

  return (
    <div className="min-h-screen bg-linear-to-br from-green-50 via-white to-green-100 flex items-center justify-center px-6">

      <div className="w-full max-w-lg bg-white rounded-3xl shadow-2xl p-10">

        {/* Logo */}

        <div className="flex justify-center">
          <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center">
            <FaLeaf className="text-green-700 text-3xl" />
          </div>
        </div>

        {/* Icon */}

        <div className="flex justify-center mt-6">
          <img src={logo} className="text-green-700 text-6xl" />
        </div>

        {/* Heading */}

        <h1 className="text-4xl font-bold text-center text-gray-800 mt-6">
          Check Your Email
        </h1>

        {/* Success */}

        <p className="text-center text-green-700 font-medium mt-4">
          Your account has been created successfully!
        </p>

        <p className="text-center text-gray-600 mt-6">
          We've sent a verification link to
        </p>

        {/* Email */}

        <div className="mt-4 bg-green-50 border border-green-200 rounded-xl py-4">
          <p className="text-center text-lg font-semibold text-green-800">
            {email}
          </p>
        </div>

        {/* Instruction */}

        <p className="text-center text-gray-600 leading-7 mt-6">
          Please open your inbox and click the verification link
          <br />
          to activate your account.
        </p>

        {/* Reminder */}

        <div className="mt-8 bg-gray-50 rounded-xl p-5 border">

          <h3 className="font-semibold text-gray-700 mb-2">
            Didn't receive the email?
          </h3>

          <ul className="text-sm text-gray-500 space-y-2 list-disc list-inside">
            <li>Check your Spam or Junk folder.</li>
            <li>Wait a few minutes for delivery.</li>
            <li>Make sure you entered the correct email address.</li>
          </ul>

        </div>

        {/* Buttons */}

        <div className="flex gap-4 mt-8">

          <button
            className="flex-1 bg-green-700 hover:bg-green-800 transition text-white font-semibold py-3 rounded-xl"
          >
            Resend Email
          </button>

          <Link
            to="/login"
            className="flex-1 border border-green-700 text-green-700 hover:bg-green-50 transition text-center py-3 rounded-xl font-semibold"
          >
            Back to Login
          </Link>

        </div>

      </div>
    </div>
  );
};

export default CheckEmail;