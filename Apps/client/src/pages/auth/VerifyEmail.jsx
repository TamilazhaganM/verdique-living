import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { FaLeaf } from "react-icons/fa";
import { verifyEmail } from "../../services/auth.service";


const VerifyEmail = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [success, setSuccess] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const verifyUserEmail = async () => {
      try {
        const token = searchParams.get("token");

        if (!token) {
          setLoading(false);
          setSuccess(false);
          setMessage("Verification token is missing.");
          return;
        }

        const response = await verifyEmail({
          token,
        })

        setSuccess(true);
        setMessage(response.message);

        setTimeout(() => {
          navigate("/login");
        }, 3000);
      } catch (error) {
        setSuccess(false);

        setMessage(
          error.response?.data?.message ||
            "Email verification failed."
        );
      } finally {
        setLoading(false);
      }
    };

    verifyUserEmail();
  }, [navigate, searchParams]);

  return (
    <div className="min-h-screen bg-linear-to-br from-green-50 via-white to-green-100 flex justify-center items-center px-6">

      <div className="bg-white w-full max-w-lg rounded-3xl shadow-2xl p-10 text-center">

        <div className="w-20 h-20 rounded-full bg-green-100 mx-auto flex items-center justify-center">

          <FaLeaf className="text-green-700 text-3xl" />

        </div>

        <h1 className="text-3xl font-bold mt-6 text-gray-800">

          Email Verification

        </h1>

        {loading ? (
          <>
            <div className="mt-8 flex justify-center">
              <div className="w-12 h-12 border-4 border-green-700 border-t-transparent rounded-full animate-spin"></div>
            </div>

            <p className="mt-6 text-gray-600">
              Verifying your email...
            </p>
          </>
        ) : success ? (
          <>
            <div className="mt-8 text-6xl">
              ✅
            </div>

            <h2 className="text-2xl font-bold text-green-700 mt-6">

              Email Verified

            </h2>

            <p className="text-gray-600 mt-4">

              {message}

            </p>

            <p className="text-sm text-gray-500 mt-6">

              Redirecting to Login...

            </p>
          </>
        ) : (
          <>
            <div className="mt-8 text-3xl">
              ❌
            </div>

            <h2 className="text-2xl font-bold text-red-600 mt-6">

              Verification Failed

            </h2>

            <p className="text-gray-600 mt-4">

              {message}

            </p>

            <button
              onClick={() => navigate("/register")}
              className="mt-8 bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-xl"
            >
              Back to Register
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default VerifyEmail;