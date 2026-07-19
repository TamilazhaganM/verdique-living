import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import Card from "../ui/Card";

import { getAllCategories } from "../../services/category.service";

const FeaturedCategories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await getAllCategories();

      // Show only first 4 categories on homepage
      setCategories(response.data.slice(0, 4));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="py-12 md:py-16 bg-white">
      <Container>
        <SectionTitle
          center
          title="Shop By Category"
          subtitle="Explore our carefully curated collections designed for every green space."
        />

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 mt-10 md:mt-16">
          {categories.map((category) => (
            <Card
              key={category._id}
              className="group overflow-hidden cursor-pointer"
            >
              <div className="overflow-hidden">
                <img
                  src={category.image?.url}
                  alt={category.name}
                  className="
                    h-40
                    sm:h-56
                    md:h-64
                    lg:h-72
                    w-full
                    object-cover
                    transition
                    duration-700
                    group-hover:scale-110
                  "
                />
              </div>

              <div className="p-3 md:p-6">
                <p className="text-xs md:text-sm text-green-700 font-medium">
                  {category.description}
                </p>

                <h3 className="text-lg md:text-2xl font-bold mt-2 line-clamp-2">
                  {category.name}
                </h3>

                <Link
                  to={`/shop?category=${category._id}`}
                  className="
                    flex
                    items-center
                    gap-2
                    mt-4
                    md:mt-6
                    text-green-700
                    font-semibold
                    text-sm
                    md:text-base
                    group-hover:gap-4
                    transition-all
                    duration-300
                  "
                >
                  Explore
                  <ArrowRight size={18} />
                </Link>
              </div>
            </Card>
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <Link
            to="/categories"
            className="
              bg-green-700
              hover:bg-green-800
              text-white
              px-6
              py-3
              rounded-xl
              transition
            "
          >
            View All Categories
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default FeaturedCategories;