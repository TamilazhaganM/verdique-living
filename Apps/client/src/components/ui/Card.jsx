const Card = ({ children, className = "" }) => {
  return (
    <div
      className={`bg-white rounded-3xl shadow-md hover:shadow-2xl transition duration-300 ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;