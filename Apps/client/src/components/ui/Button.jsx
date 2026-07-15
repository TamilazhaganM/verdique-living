import { Link } from "react-router-dom";

const Button = ({
  children,
  variant = "primary",
  to,
  type = "button",
  className = "",
  ...props
}) => {
  const base =
    "inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold transition-all duration-300";

  const variants = {
    primary:
      "bg-green-700 text-white hover:bg-green-800 hover:shadow-xl hover:-translate-y-1",

    secondary:
      "border border-green-700 text-green-700 hover:bg-green-700 hover:text-white",

    outline:
      "border border-gray-300 text-gray-700 hover:border-green-700 hover:text-green-700",

    danger:
      "bg-red-600 text-white hover:bg-red-700",
  };

  if (to) {
    return (
      <Link
        to={to}
        className={`${base} ${variants[variant]} ${className}`}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={`${base} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;