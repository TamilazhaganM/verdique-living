import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import TestimonialCard from "./TestimonialCard";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Interior Designer",
    image: "https://i.pravatar.cc/150?img=32",
    review:
      "The plants arrived fresh, healthy, and beautifully packed. My home feels much more vibrant now.",
  },

  {
    name: "Rahul Verma",
    role: "Software Engineer",
    image: "https://i.pravatar.cc/150?img=12",
    review:
      "Excellent customer service! They helped me choose the perfect indoor plants for my apartment.",
  },

  {
    name: "Ananya Patel",
    role: "Home Gardener",
    image: "https://i.pravatar.cc/150?img=47",
    review:
      "Premium quality plants and quick delivery. I've already recommended Verdique Living to my friends.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-white">

      <Container>

        <SectionTitle
          center
          badge="Testimonials"
          title="What Our Customers Say"
          subtitle="Trusted by thousands of happy plant lovers across India."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {testimonials.map((item) => (

            <TestimonialCard
              key={item.name}
              {...item}
            />

          ))}

        </div>

      </Container>

    </section>
  );
};

export default Testimonials;