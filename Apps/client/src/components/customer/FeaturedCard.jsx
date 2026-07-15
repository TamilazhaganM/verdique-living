import Card from "../ui/Card";

const FeatureCard = ({ icon: Icon, title, description }) => {
  return (
    <Card
      className="
      group
      p-8
      text-center
      border
      border-transparent
      hover:border-green-600
      transition-all
      duration-300
      hover:-translate-y-2
      "
    >
      {/* Icon */}

      <div
        className="
        w-20
        h-20
        mx-auto
        rounded-full
        bg-green-100
        flex
        items-center
        justify-center
        group-hover:bg-green-700
        transition
        "
      >
        <Icon
          size={38}
          className="
          text-green-700
          group-hover:text-white
          transition
          "
        />
      </div>

      {/* Title */}

      <h3 className="mt-8 text-2xl font-bold text-gray-900">

        {title}

      </h3>

      {/* Description */}

      <p className="mt-4 text-gray-600 leading-7">

        {description}

      </p>
    </Card>
  );
};

export default FeatureCard;