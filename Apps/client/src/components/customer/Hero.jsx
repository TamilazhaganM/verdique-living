import {FaArrowRight,FaPlay,FaLeaf,FaTruck,FaShieldAlt,FaStar,} from "react-icons/fa";
import { motion } from "framer-motion";
import heroImage from "../../assets/images/heroimage1.jpg";
import Container from "../ui/Container";
import Button from "../ui/Button";
import Badge from "../ui/Badge";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-[#F8F6F1] pt-28 lg:pt-32">

      {/* Background */}

      <div className="absolute inset-0 bg-gradient-to-br from-[#FAFAF7] via-[#F8F6F1] to-[#EEF7EC]" />

      {/* Blur Effects */}

      <div className="absolute -top-40 -right-40 w-[520px] h-[520px] rounded-full bg-green-300/30 blur-[170px]" />

      <div className="absolute bottom-0 -left-32 w-[420px] h-[420px] rounded-full bg-green-100 blur-[150px]" />

      <Container>

        <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center min-h-[85vh]">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, y: -120 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.5,
              ease: "easeOut",
            }}
          >

            <Badge>

              🌿 Trusted by 25,000+ Plant Lovers

            </Badge>

            <h1 className="mt-8 font-black tracking-tight leading-[0.9] text-gray-900">

              <span className="block text-5xl md:text-6xl lg:text-7xl">

                Bring Nature

              </span>

              <span className="block text-5xl md:text-6xl lg:text-7xl text-green-700 mt-2">

                Into Every Home

              </span>

            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-gray-600">

              Discover premium indoor plants, outdoor greenery,
              stylish pots and sustainable gardening essentials
              carefully curated to transform every living space
              into a healthier, happier environment.

            </p>

            {/* Buttons */}

            <div className="mt-10 flex flex-wrap gap-5">

              <Button
                to="/shop"
                variant="primary"
              >

                Shop Collection

                <FaArrowRight className="ml-2" />

              </Button>

              <Button
                to="/about"
                variant="outline"
              >

                <FaPlay className="mr-2" />

                Explore More

              </Button>

            </div>

            {/* Trust */}

            <div className="flex flex-wrap gap-8 mt-12">

              <div className="flex items-center gap-3">

                <FaLeaf className="text-green-700 text-xl" />

                <span className="text-gray-700 font-medium">

                  Premium Plants

                </span>

              </div>

              <div className="flex items-center gap-3">

                <FaTruck className="text-green-700 text-xl" />

                <span className="text-gray-700 font-medium">

                  Fast Delivery

                </span>

              </div>

              <div className="flex items-center gap-3">

                <FaShieldAlt className="text-green-700 text-xl" />

                <span className="text-gray-700 font-medium">

                  Healthy Guarantee

                </span>

              </div>

            </div>

            {/* Statistics */}

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">

              <div>

                <h2 className="text-4xl font-black text-green-700">

                  25K+

                </h2>

                <p className="text-gray-500 mt-2">

                  Happy Customers

                </p>

              </div>

              <div>

                <h2 className="text-4xl font-black text-green-700">

                  600+

                </h2>

                <p className="text-gray-500 mt-2">

                  Plant Species

                </p>

              </div>

              <div>

                <h2 className="text-4xl font-black text-green-700">

                  48 hrs

                </h2>

                <p className="text-gray-500 mt-2">

                  Fast Delivery

                </p>

              </div>

              <div>

                <h2 className="text-4xl font-black text-green-700 flex items-center gap-1">

                  4.9

                  <FaStar className="text-yellow-500 text-2xl" />

                </h2>

                <p className="text-gray-500 mt-2">

                  Customer Rating

                </p>

              </div>

            </div>

          </motion.div>

                    {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 1,
              ease: "easeOut",
            }}
            className="relative flex justify-center"
          >

            {/* Glow Behind Image */}

            <div
              className="
                absolute
                inset-0
                flex
                items-center
                justify-center
              "
            >
              <div
                className="
                  w-162.5
                  h-137.5
                  rounded-full
                  bg-linear-to-r
                  from-green-300
                  via-emerald-200
                  to-lime-300
                  blur-[140px]
                  opacity-40
                "
              />
            </div>

            {/* Main Image */}

            <motion.img
              src={heroImage}
              alt="Verdique Living"
              animate={{
                y: [0, -12, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                relative
                z-10
                w-full
                max-w-xl
                h-[500px]
                object-cover
                rounded-[40px]
                shadow-[0_40px_100px_rgba(22,101,52,0.25)]
                border
                border-white/40
              "
            />

            {/* Floating Card 1 */}

            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="
                group
                absolute
                left-0
                top-20
                z-20
                bg-white/60
                backdrop-blur-2xl
                border
                border-white/40
                rounded-3xl
                px-6
                py-5
                shadow-xl
                transition-all
                duration-300
                hover:bg-green-600
                hover:scale-105
                hover:shadow-2xl
                cursor-pointer
              "
            >

              <div className="flex items-center gap-4">

                <FaLeaf
                  className="
                    text-3xl
                    text-green-700
                    transition
                    group-hover:text-white
                  "
                />

                <div>

                  <h4 className="font-bold transition group-hover:text-white">

                    Air Purifying

                  </h4>

                  <p
                    className="
                      text-sm
                      text-gray-500
                      transition
                      group-hover:text-green-100
                    "
                  >

                    Healthy Indoor Plants

                  </p>

                </div>

              </div>

            </motion.div>

            {/* Floating Card 2 */}

            <motion.div
              animate={{
                y: [0, 12, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
              }}
              className="
                group
                absolute
                right-0
                bottom-30
                z-20
                bg-white/60
                backdrop-blur-2xl
                border
                border-white/40
                rounded-3xl
                px-6
                py-5
                shadow-xl
                transition-all
                duration-300
                hover:bg-green-600
                hover:scale-105
                hover:shadow-2xl
                cursor-pointer
              "
            >

              <div className="flex items-center gap-4">

                <FaTruck
                  className="
                    text-3xl
                    text-green-700
                    transition
                    group-hover:text-white
                  "
                />

                <div>

                  <h4 className="font-bold transition group-hover:text-white">

                    Free Shipping

                  </h4>

                  <p
                    className="
                      text-sm
                      text-gray-500
                      transition
                      group-hover:text-green-100
                    "
                  >

                    Orders Above ₹999

                  </p>

                </div>

              </div>

            </motion.div>

            {/* Experience Badge */}

            {/* <motion.div
              animate={{
                rotate: [0, 2, -2, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
              }}
              className="
                absolute
                top-150
                left-1/2
                -translate-x-1/2
                z-20
                bg-white
                rounded-full
                px-8
                py-4
                shadow-xl
                border
                border-green-100
              "
            >

              <div className="flex items-center gap-3">

                <FaStar className="text-yellow-500 text-xl" />

                <span className="font-semibold text-gray-800">

                  Premium Quality Since 2025

                </span>

              </div>

            </motion.div> */}

          </motion.div>

        </div>

      </Container>

            {/* Bottom Floating Feature Bar */}

     
      {/* Scroll Indicator */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className="
          hidden
          lg:flex
          absolute
          bottom-6
          right-70
          flex-col
          items-center
          gap-2
        "
      >

        <span className="text-sm tracking-widest uppercase text-gray-500">

          Scroll

        </span>

        <div className="w-[2px] h-16 bg-gradient-to-b from-green-700 to-transparent"></div>

      </motion.div>

      {/* Decorative Circles */}

      <div className="absolute top-24 left-20 w-4 h-4 rounded-full bg-green-400 opacity-40"></div>

      <div className="absolute top-42 right-32 w-10 h-10 rounded-full bg-green-300 opacity-30"></div>

      <div className="absolute bottom-20 left-180 w-3 h-3 rounded-full bg-green-600 opacity-40"></div>

      <div className="absolute top-92 right-160 w-5 h-5 rounded-full bg-lime-300 opacity-40"></div>

      <div className="absolute bottom-32 left-10 w-5 h-5 rounded-full bg-lime-300 opacity-40"></div>


    </section>
  );
};

export default Hero;