import Container from "../../components/ui/Container";
import CategoryCard from "../../components/customer/CategoriesCard";
import { useEffect, useState } from "react";
import { getAllCategories } from "../../services/category.service";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await getAllCategories();
      setCategories(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <Container>
        {/* Heading */}

        <div className="text-center mb-10 my-4 sm:mb-14 lg:mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Browse Categories
          </h1>

          <p className="text-gray-500 mt-4 sm:mt-5 max-w-2xl mx-auto text-sm sm:text-base leading-7">
            Discover the perfect plants and gardening essentials for every
            space.
          </p>
        </div>

        {/* Categories */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {categories.map((category) => (
            <CategoryCard
              key={category._id}
              category={category}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Categories;