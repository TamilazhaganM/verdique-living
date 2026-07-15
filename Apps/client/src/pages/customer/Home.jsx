import FeaturedCategories from "../../components/customer/FeaturedCategories";
import FeaturedProducts from "../../components/customer/FeaturedProduct";
import Hero from "../../components/customer/Hero";
import Navbar from "../../components/customer/Navbar";
import Statistics from "../../components/customer/Statistics";
import TestimonialCard from "../../components/customer/TestimonialCard";
import Testimonials from "../../components/customer/Testimonial";
import WhyChooseUs from "../../components/customer/WhyChooseUs";
import Newsletter from "../../components/customer/Newsletter";

const Home = () => {
  return (
    <>
      <Hero />
      <FeaturedCategories />
      <FeaturedProducts />
      <WhyChooseUs />
      <Statistics />
      <Testimonials />
      <Newsletter />
    </>
  );
};

export default Home;