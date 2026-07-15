import Card from "../ui/Card";

const CounterCard = ({ icon: Icon, number, label }) => {
  return (
    <Card
      className="
      group
      text-center
      p-10
      hover:-translate-y-2
      transition-all
      duration-300
      "
    >
      <div
        className="
        w-20
        h-20
        rounded-full
        bg-green-100
        mx-auto
        flex
        items-center
        justify-center
        group-hover:bg-green-700
        transition
        "
      >
        <Icon
          size={36}
          className="
          text-green-700
          group-hover:text-white
          transition
          "
        />
      </div>

      <h2 className="mt-8 text-5xl font-bold text-green-700">

        {number}

      </h2>

      <p className="mt-3 text-gray-600 font-medium">

        {label}

      </p>

    </Card>
  );
};

export default CounterCard;