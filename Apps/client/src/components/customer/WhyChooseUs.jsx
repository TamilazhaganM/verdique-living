import {
  Leaf,
  Truck,
  ShieldCheck,
  HeartHandshake,
} from "lucide-react";

import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";

import FeatureCard from "./FeaturedCard";

const features = [
  {
    icon: Leaf,

    title: "Premium Quality",

    description:
      "Every plant is carefully selected from trusted nurseries to ensure freshness and long-lasting growth.",
  },

  {
    icon: Truck,

    title: "Fast Delivery",

    description:
      "Secure packaging with quick delivery so your plants arrive healthy and damage-free.",
  },

  {
    icon: ShieldCheck,

    title: "Healthy Guarantee",

    description:
      "We deliver only healthy plants backed by our quality assurance and replacement policy.",
  },

  {
    icon: HeartHandshake,

    title: "Expert Support",

    description:
      "Need help caring for your plants? Our team is always ready to guide you.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-white">

      <Container>

        <SectionTitle
          center
          badge="Why Verdique"
          title="Why Choose Verdique Living?"
          subtitle="We don't just sell plants. We help you create healthier, greener and happier living spaces."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {features.map((feature) => (

            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />

          ))}

        </div>

      </Container>

    </section>
  );
};

export default WhyChooseUs;