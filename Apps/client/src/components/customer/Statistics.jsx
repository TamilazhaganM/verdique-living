import {
  Leaf,
  Smile,
  Truck,
  Star,
} from "lucide-react";

import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";

import CounterCard from "./CounterCard";

const statistics = [

  {

    icon: Leaf,

    number: "500+",

    label: "Plant Varieties",

  },

  {

    icon: Smile,

    number: "10K+",

    label: "Happy Customers",

  },

  {

    icon: Truck,

    number: "25K+",

    label: "Orders Delivered",

  },

  {

    icon: Star,

    number: "4.9",

    label: "Customer Rating",

  },

];

const Statistics = () => {

  return (

    <section className="py-24 bg-green-50">

      <Container>

        <SectionTitle

          center

          badge="Achievements"

          title="Trusted By Thousands"

          subtitle="Growing greener homes across the country with premium plants and exceptional service."

        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {statistics.map((item) => (

            <CounterCard

              key={item.label}

              icon={item.icon}

              number={item.number}

              label={item.label}

            />

          ))}

        </div>

      </Container>

    </section>

  );

};

export default Statistics;