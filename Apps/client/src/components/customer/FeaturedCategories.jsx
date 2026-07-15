import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import Card from "../ui/Card";

import indoor from "../../assets/images/categories/Indoor/indoor.jpg";
import outdoor from "../../assets/images/categories/outdoor/outdoor.jpg";
import pots from "../../assets/images/categories/pots/Pots.jpg";
import care from "../../assets/images/categories/care/Plantcare.jpg";

const categories = [
  {
    id: 1,
    name: "Indoor Plants",
    image: indoor,
    count: "120+ Plants",
  },
  {
    id: 2,
    name: "Outdoor Plants",
    image: outdoor,
    count: "80+ Plants",
  },
  {
    id: 3,
    name: "Pots & Planters",
    image: pots,
    count: "65+ Products",
  },
  {
    id: 4,
    name: "Plant Care",
    image: care,
    count: "40+ Products",
  },
];

const FeaturedCategories = () => {
  return (
    <section className="py-14 bg-white">

      <Container>

        <SectionTitle
          center
          title="Shop By Category"
          subtitle="Explore our carefully curated collections designed for every green space."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

          {categories.map((category) => (

            <Card
              key={category.id}
              className="group overflow-hidden cursor-pointer"
            >

              <div className="overflow-hidden">

                <img
                  src={category.image}
                  alt={category.name}
                  className="h-72 w-full object-cover transition duration-700 group-hover:scale-110"
                />

              </div>

              <div className="p-6">

                <p className="text-sm text-green-700 font-medium">

                  {category.count}

                </p>

                <h3 className="text-2xl font-bold mt-2">

                  {category.name}

                </h3>

                <Link
                  to="/shop"
                  className="flex items-center gap-2 mt-6 text-green-700 font-semibold group-hover:gap-4 transition-all duration-300"
                >

                  Explore

                  <ArrowRight size={18} />

                </Link>

              </div>

            </Card>

          ))}

        </div>

      </Container>

    </section>
  );
};

export default FeaturedCategories;