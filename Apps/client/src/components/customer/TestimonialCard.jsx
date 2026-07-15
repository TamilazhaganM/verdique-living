import { Quote, Star } from "lucide-react";
import Card from "../ui/Card";

const TestimonialCard = ({
  name,
  role,
  image,
  review,
}) => {
    console.log("TestimonialCard Loaded");
    console.log({
    name,
    role,
    image,
    review
  });

  return (
    <Card
      className="
      p-8
      hover:-translate-y-2
      transition-all
      duration-300
      relative
      "
    >
      {/* Quote */}

      <div className="absolute top-6 right-6 text-green-100">
        <Quote size={48} />
      </div>

      {/* Stars */}

      <div className="flex gap-1 mb-6">
        {[...Array(5)].map((_, index) => (
          <Star
            key={index}
            size={18}
            className="fill-yellow-400 text-yellow-400"
          />
        ))}
      </div>

      {/* Review */}

      <p className="text-gray-600 leading-8 italic">
         {review}
      </p>

      {/* User */}

      <div className="flex items-center gap-4 mt-8">

        <img
          src={image}
          alt={name}
          className="w-16 h-16 rounded-full object-cover"
        />

        <div>

          <h4 className="font-bold text-lg">
            {name}
          </h4>

          <p className="text-gray-500 text-sm">
            {role}
          </p>

        </div>

      </div>

    </Card>
  );
};

export default TestimonialCard; 