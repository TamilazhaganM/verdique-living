import { Link } from "react-router-dom";

const AboutHero = () => {
  return (
    <section
      className="
        relative 
        min-h-[70vh] 
        sm:min-h-[75vh]
        bg-cover 
        bg-center 
        flex 
        items-center 
        justify-center
        mt-16
      "
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=1600&q=80')",
      }}
    >

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/55"></div>


      {/* Content */}
      <div
        className="
          relative 
          z-10 
          max-w-4xl 
          text-center 
          px-5
          sm:px-8
          pt-10
        "
      >

        <h1
          className="
            text-4xl
            sm:text-5xl
            md:text-6xl
            lg:text-7xl
            font-bold
            text-white
            leading-tight
          "
        >
          Bringing Nature
          <br />
          Closer to Every Home
        </h1>


        <p
          className="
            mt-5
            sm:mt-8
            text-base
            sm:text-lg
            md:text-xl
            text-gray-200
            leading-7
            sm:leading-8
          "
        >
          At Verdique Living, we believe every home deserves the beauty,
          freshness, and calm that plants bring. We carefully curate premium
          plants and gardening essentials for every lifestyle.
        </p>


        <Link
          to="/shop"
          className="
            inline-block
            mt-4
            sm:mt-10
            bg-green-700
            hover:bg-green-800
            text-white
            px-6
            sm:px-8
            py-3
            sm:py-4
            rounded-xl
            transition
            duration-300
            text-sm
            sm:text-base
          "
        >
          Explore Collection
        </Link>


      </div>

    </section>
  );
};

export default AboutHero;