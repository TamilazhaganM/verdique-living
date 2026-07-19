import { motion } from "framer-motion";

const StatsCard = ({
  icon: Icon,
  title,
  value,
  color,
  onClick,
}) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      onClick={onClick}
      className="
        bg-white
        rounded-2xl
        shadow
        border
        p-6
        cursor-pointer
        transition
      "
    >
      <Icon className={color} size={36} />

      <p className="text-gray-500 mt-4">
        {title}
      </p>

      <h2 className="text-3xl font-bold mt-2 text-gray-800">
        {value}
      </h2>

    </motion.div>
  );
};

export default StatsCard;