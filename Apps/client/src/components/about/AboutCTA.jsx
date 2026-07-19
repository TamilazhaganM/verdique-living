import { Link } from "react-router-dom";
import { ArrowRight, Leaf } from "lucide-react";


const AboutCTA = () => {
  return (
    <section className="py-16 sm:py-20">

      <div className="
        max-w-7xl
        mx-auto
        px-5
        sm:px-8
      ">

        <div
          className="
            relative
            overflow-hidden
            rounded-3xl
            bg-[#0D1F0F]
            px-6
            py-12
            sm:px-12
            sm:py-16
            text-center
          "
        >

          {/* Decorative Circle */}
          <div
            className="
              absolute
              -top-20
              -right-20
              w-60
              h-60
              rounded-full
              bg-[#4A7C59]/30
            "
          />


          <div className="relative z-10">


            <Leaf
              className="
                mx-auto
                text-[#7EC845]
              "
              size={45}
            />


            <h2
              className="
                mt-6
                text-3xl
                sm:text-4xl
                lg:text-5xl
                font-bold
                text-white
              "
            >
              Ready To Bring Nature
              Into Your Space?
            </h2>


            <p
              className="
                mt-5
                max-w-2xl
                mx-auto
                text-gray-300
                leading-7
              "
            >
              Explore our premium plants and landscape solutions
              designed to transform your home and workplace
              into a refreshing green environment.
            </p>



            <Link
              to="/shop"
              className="
                inline-flex
                items-center
                gap-2
                mt-8
                bg-[#7EC845]
                text-black
                px-7
                py-3
                rounded-xl
                font-semibold
                hover:bg-[#9BE35A]
                transition
                duration-300
              "
            >

              Explore Collection

              <ArrowRight size={20}/>

            </Link>


          </div>


        </div>


      </div>


    </section>
  );
};


export default AboutCTA;