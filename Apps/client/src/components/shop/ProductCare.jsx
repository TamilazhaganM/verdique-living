import {
  Sun,
  Droplets,
  Ruler,
  Leaf,
} from "lucide-react";

const ProductCare = ({ product }) => {

  const cards = [
    {
      icon: <Sun className="text-yellow-500" size={30} />,
      title: "Sunlight",
      value: product.sunlight,
    },
    {
      icon: <Droplets className="text-blue-500" size={30} />,
      title: "Watering",
      value: product.watering,
    },
    {
      icon: <Ruler className="text-green-600" size={30} />,
      title: "Spacing",
      value: product.spacing,
    },
    {
      icon: <Leaf className="text-green-700" size={30} />,
      title: "Plant Type",
      value: product.plantType,
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-5 mt-12">

      {cards.map((card) => (

        <div
          key={card.title}
          className="
          bg-green-50
          border
          rounded-2xl
          p-6
          hover:shadow-lg
          transition
          "
        >

          <div className="mb-4">

            {card.icon}

          </div>

          <h4 className="font-semibold text-gray-700">

            {card.title}

          </h4>

          <p className="mt-2 text-lg font-bold text-gray-900">

            {card.value || "-"}

          </p>

        </div>

      ))}

    </div>
  );
};

export default ProductCare;