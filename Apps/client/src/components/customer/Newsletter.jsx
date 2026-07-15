import { Mail, Send } from "lucide-react";
import Container from "../ui/Container";

const Newsletter = () => {
  return (
    <section className="py-24 bg-gradient-to-r from-green-700 via-green-600 to-emerald-700 overflow-hidden relative">

      {/* Decorative Circles */}

      <div className="absolute -top-24 -left-24 w-72 h-72 bg-white/10 rounded-full"></div>

      <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-white/10 rounded-full"></div>

      <Container>

        <div className="relative z-10 max-w-4xl mx-auto text-center text-white">

          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/20 backdrop-blur mb-8">

            <Mail size={38} />

          </div>

          <h2 className="text-4xl md:text-5xl font-bold">

            Join the Verdique Community

          </h2>

          <p className="mt-6 text-lg text-green-100 leading-8">

            Subscribe to receive gardening tips, exclusive discounts,
            new arrivals and seasonal plant care guides.

          </p>

          {/* Form */}

          <form
            className="
            mt-12
            flex
            flex-col
            md:flex-row
            gap-4
            max-w-2xl
            mx-auto
            "
          >

            <input
              type="email"
              placeholder="Enter your email address"
              className="
              flex-1
              bg-white
              text-gray-700
              rounded-xl
              px-6
              py-4
              outline-none
              shadow-lg
              "
            />

            <button
              type="submit"
              className="
              inline-flex
              items-center
              justify-center
              gap-2
              bg-gray-900
              hover:bg-black
              px-8
              py-4
              rounded-xl
              font-semibold
              transition-all
              hover:scale-105
              "
            >
              Subscribe

              <Send size={18} />
            </button>

          </form>

          <p className="mt-6 text-green-100 text-sm">

            No spam. Unsubscribe anytime.

          </p>

        </div>

      </Container>

    </section>
  );
};

export default Newsletter;