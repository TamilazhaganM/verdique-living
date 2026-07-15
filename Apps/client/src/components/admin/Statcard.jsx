const StatCard = ({ title, value, icon }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 hover:shadow-lg transition">

      <div className="flex justify-between items-center">

        <div>

          <p className="text-gray-500">
            {title}
          </p>

          <h2 className="text-3xl font-bold mt-2">
            {value}
          </h2>

        </div>

        <div className="bg-green-100 text-green-700 p-4 rounded-xl">
          {icon}
        </div>

      </div>

    </div>
  );
};

export default StatCard;