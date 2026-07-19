import { SearchX } from "lucide-react";

const EmptyState = ({
  title = "No Products Found",
  description = "Try changing your search or filters.",
  buttonText = "Clear Filters",
  onClick,
}) => {
  return (
    <div className="lg:col-span-3 flex justify-center items-center py-24">

      <div className="max-w-md text-center">

        <div className="w-24 h-24 mx-auto rounded-full bg-green-100 flex items-center justify-center">

          <SearchX
            size={45}
            className="text-green-700"
          />

        </div>

        <h2 className="text-3xl font-bold mt-8">

          {title}

        </h2>

        <p className="text-gray-500 mt-4 leading-7">

          {description}

        </p>

        <button
          onClick={onClick}
          className="
          mt-8
          bg-green-700
          hover:bg-green-800
          text-white
          px-8
          py-3
          rounded-xl
          transition
          "
        >
          {buttonText}
        </button>

      </div>

    </div>
  );
};

export default EmptyState;